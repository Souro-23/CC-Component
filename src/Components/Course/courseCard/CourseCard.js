import React from 'react'
import classes from './CourseCard.module.css'
import { Col, Card, Button, Avatar} from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';
import defaultCourseImage from '../../../Images/defaultCourseImage.jpg'

export class CourseCard extends React.Component {

	render() {
		const courses = this.props.courses.map((course) => {
			let DefaultCourseImage = defaultCourseImage
			if (course.content.image) {
				DefaultCourseImage = course.content.image
			}
			return (
				<Col
					xl={8}
					lg={12}
					md={12}
					sm={12} xs={24}>
					<Link to={{ pathname: "/course/" + course.slug }}>
						<Card className={classes.card}
							cover={
								<img
									alt="example"
									src={DefaultCourseImage}
									className={classes.courseImage}
								/>
							}>

							<div style={{ display: "flex", marginBottom: "10px", marginLeft: "5px" }}>
								<Avatar src={course.user.image} style={{ height: "25px", width: "25px", borderRadius: "50%" }}/>
								<p style={{ marginLeft: "10px" }}>{course.user.first_name} {course.user.last_name}</p>
							</div>
							<div className={classes.n} >
								{
									course.name.length <= 40 ?
										<h3>{course.name}</h3>
										:
										<h3>{course.name.substring(0, 40) + '...'}</h3>
								}
							</div>
							{
								this.props.editing ?
									<Button className={classes.button}><Link to={{ pathname: "/course/" + course.slug + '/edit' }}>Edit <ArrowRightOutlined style={{ color: "#1890ff" }} /></Link></Button>
									:
									<Button className={classes.button}><Link to={{ pathname: "/course/" + course.slug }}>View <ArrowRightOutlined style={{ color: "#1890ff" }} /></Link></Button>
							}
						</Card></Link>
				</Col>
			)
		})
		return (
			<>{courses}</>
		)
	}
}

export default CourseCard