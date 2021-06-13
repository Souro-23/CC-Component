import React, { Fragment } from "react";
import classes from "./Course.module.css";
import { Row, Col, Input } from "antd";
import CourseCard from "../../../../../Components/Course/courseCard/CourseCard";
import PathCard from "../../../../../Components/Course/CoursePath/path/PathCard";

import CourseSkeleton from "../../../../../Components/Skeleton/CourseSkeleton";
import booknotfound from "../../../../../Images/booknotfound.gif";
import {
  Suggested_course,
  course_searchAPI,
  Course_path,
} from "../../../../../Constants/ApiUrls";
// import DynamicTitle from "../../../../../components/DynamicTitle";
// import { elasticSearchCourseQuery } from "../../../../../ElasticSearch/EsSearch";
import { axiosEsAPI, axiosAPI } from "../../../../../Axios/Axios";

const { Search } = Input;

export class Course extends React.Component {
  state = {
    Sugestedcourses: [],
    sugestedPAth: [],
    sugestedPAthloading: true,
    loading: true,
    searching: false,
    noDataFound: false,
    query: "",
  };

  componentDidMount() {
    axiosAPI("get", Suggested_course)
      .then((response) => {
        this.setState({
          Sugestedcourses: response.data,
          loading: false,
        });
      })
      .catch(function (error) {
        console.log(error);
      });

    axiosAPI("get", Course_path)
      .then((res) => {
        console.log("Path Res", res);
        this.setState({
          sugestedPAthloading: false,
          sugestedPAth: res.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  // esSearching = (Query) => {
  //   const query = Query.trim()
  //   this.setState({
  //     noDataFound: false,
  //     query: query,
  //   })
  //   if (query === "") {
  //     return
  //   }
  //   const queryData = elasticSearchCourseQuery(query);
  //   axiosEsAPI(
  //     "post",
  //     course_searchAPI,
  //     queryData,
  //   )
  //     .then(res => {
  //       console.log(res.data.hits.hits)
  //       const courses = res.data.hits.hits.map(course => ({
  //         image: course._source.image,
  //         name: course._source.name,
  //         user: course._source.user,
  //         slug: course._source.slug
  //       }))
  //       if (res.data.hits.hits.length === 0) {
  //         this.setState({ noDataFound: true, popularcourse: [] })
  //         return
  //       }
  //       this.setState({ Sugestedcourses: courses, noDataFound: false, })
  //     }).catch(err => {
  //       console.log(err);
  //     })
  // }

  render() {
    let Sugestedcourses = <CourseSkeleton items={[1, 2, 3]} />;
    if (!this.state.loading) {
      Sugestedcourses = <CourseCard courses={this.state.Sugestedcourses} />;
    }
    let SugestedPAth = <CourseSkeleton items={[1, 2, 3]} />;
    if (!this.state.sugestedPAthloading) {
      SugestedPAth = <PathCard paths={this.state.sugestedPAth} />;
    }
    return (
      <React.Fragment>
        {/*  <DynamicTitle title='Explore | CitizenChoice' /> */}
        <Row justify="center">
          <Col sm={19} sx={20}>
            <Search
              className={classes.SearchBox}
              placeholder="What you want to learn?"
              // enterButton
              // allowClear
              // onSearch={onSearch}
              // style={{ width: 200 }}
              size="large"
            />
          </Col>
        </Row>

        <div className={classes.courses}>
          {this.state.noDataFound ? (
            <div
              className={classes.notFound}
              style={{ backgroundImage: `url(${booknotfound})` }}
            >
              <div style={{ textAlign: "center", fontSize: "30px" }}>
                <h1 style={{ color: "black" }}>We're Sorry!</h1>
              </div>
              <div
                style={{
                  color: "black",
                  textAlign: "center",
                  fontSize: "18px",
                }}
              >
                <p>
                  We can't seem to find any course that match for{" "}
                  <b>"{this.state.query}"</b>
                </p>
              </div>
            </div>
          ) : (
            <Fragment>
              {this.state.query !== "" ? (
                <Fragment>
                  <h1 style={{ fontSize: "15px" }}>
                    Search Results for "{this.state.query}"
                  </h1>
                  <Row gutter={[24, 24]}>{Sugestedcourses}</Row>
                </Fragment>
              ) : (
                <Fragment>
                  <h1 style={{ fontSize: "30px" }}>Let's get started!</h1>
                  <Row gutter={[24, 24]}>{SugestedPAth}</Row>
                  <h1 style={{ fontSize: "28px" }}>Suggested Courses</h1>
                  <Row gutter={[24, 24]}>{Sugestedcourses}</Row>
                </Fragment>
              )}
            </Fragment>
          )}
        </div>
      </React.Fragment>
    );
  }
}

export default Course;
