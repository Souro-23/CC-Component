import React ,{ useContext}  from 'react'
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import IconClasses from '../MoreIcons.module.css'
import { subtopicContext } from "../Root/Root";
import { Popover, Spin } from 'antd'
import { ArrowDownOutlined, LoadingOutlined, ArrowUpOutlined, CloseCircleOutlined, MoreOutlined } from '@ant-design/icons'
import AddComponent from '../AddComponent/AddComponent';
import classes from '../MoreIcons.module.css';

const UP = -1
const DOWN = 1
export default function CkEditor({ component, index }) {
    const {subtopic, changeSubtopic, handleMove, RemoveComponent, addComponent} = useContext(subtopicContext)
    const content = (
        <div className={IconClasses.moreIcons}>
            <ArrowUpOutlined onClick={() => handleMove(index, UP)} className={IconClasses.moreIcon} />
            <CloseCircleOutlined onClick={() => RemoveComponent(index)}  className={IconClasses.moreIcon} />
            <ArrowDownOutlined onClick={()=>handleMove(index, DOWN)}  className={IconClasses.moreIcon} />
        </div>
    );

    return (
        <div style={{
            padding: "1rem",
            backgroundColor: "#fafafa",
            borderRadius: "10px"
        }}>
            <div style={{ display: 'flex', justifyContent: "end" }}>
                    <Popover placement="bottomRight" content={content} trigger="hover">
                        <MoreOutlined className={IconClasses.more} />
                    </Popover>
                </div>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
            />
        </div>
    );
}
