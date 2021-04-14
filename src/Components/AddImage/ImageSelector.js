import classes from './ImageSelector.module.css'
import React, { useState ,useContext} from 'react'
import { subtopicContext } from "../Root/Root";
import { Popover, Spin } from 'antd'
import { ArrowDownOutlined, LoadingOutlined, ArrowUpOutlined, CloseCircleOutlined, MoreOutlined } from '@ant-design/icons'
import AddComponent from '../AddComponent/AddComponent';


const UP = -1
const DOWN = 1


export default function ImageSelector({ component, index }) {
    const [imageArray, setImageArray] = useState([])
    const {subtopic, changeSubtopic, handleMove, RemoveComponent, addComponent} = useContext(subtopicContext)



    const content = (
        <div className={classes.moreIcons}>
            <ArrowUpOutlined onClick={() => handleMove(index, UP)} className={classes.moreIcon} />
            <CloseCircleOutlined onClick={() => RemoveComponent(index)}  className={classes.moreIcon} />
            <ArrowDownOutlined onClick={()=>handleMove(index, DOWN)}  className={classes.moreIcon} />
        </div>
    );
    const uploadMultipleFiles = (e) => {
        const fileObj = e.target.files;
        let uploadingFiles = []
        for (let i = 0; i < fileObj.length; i++) {
            uploadingFiles.push({
                uploading: true
            })
        }
        setImageArray([ ...uploadingFiles, ...imageArray])

        setTimeout(() => {
            uploadImage(fileObj)
        }, 3000)


    };

    const uploadImage = (fileObj) => {
        // TODO Some logics to uplaod image   
        let uploadingFiles = []
        for (let i = 0; i < fileObj.length; i++) {
            uploadingFiles.push({
                url: URL.createObjectURL(fileObj[i]),
                uploading: false
            })
        }
        setImageArray([ ...uploadingFiles, ...imageArray])
    }

    const removeFile = (url) => {
        let filteredArray = imageArray.filter(
            item => item.url !== url
        );
        setImageArray([...filteredArray])
    };

    return (
        <div>
        <div className={classes.imageSelectComtainer}>
            <div >
                <div style={{ display: 'flex', justifyContent: "end" }}>
                    <Popover placement="bottomRight" content={content} trigger="hover">
                        <MoreOutlined className={classes.more} />
                    </Popover>
                </div>
                <label className={classes.addImage} htmlFor='subtopicImages'>Select an Image</label>
                <input
                    id='subtopicImages'
                    type='file'
                    name='subtopicImages'
                    multiple={true}
                    accept='image/*'
                    hidden
                    onChange={uploadMultipleFiles}
                />
            </div>

            <br/>
            {imageArray.map((image,index) => (
                image.uploading ?
                    <div key={index} className={classes.loading}>
                        <Spin indicator={<LoadingOutlined style={{ fontSize: 24 }} />} />
                    </div>

                    :
                    <div key={index}  className={classes.imageDisplayContaner}>
                        <CloseCircleOutlined className={classes.cancelicon} onClick={() => removeFile(image.url)} />
                        <img className={classes.selectedImage} src={image.url} />
                    </div>
            ))}
        </div>
        <AddComponent onAddComponent={addComponent} index={index} />
        </div>


    )
}
