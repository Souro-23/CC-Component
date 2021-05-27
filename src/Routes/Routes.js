//all routes declare here
import React from "react";

//import statemnets
import { Route, Switch, Redirect } from "react-router-dom";
// import WelcomePage from "../components/Welcome/Welcome";
// import BrowseCourse from "../components/Course/BrowseCourse/BrowseCourse";
// import CourseSubtopic from "../components/Course/CourseSubtopic/CourseSubtopic";
import PageNotFound from "../Components/PageNotFound/PageNotFound";
// import ProfileForm from "../containers/Account/ProfileForm/ProfileForm";
// import CourseDetailView from "../containers/Auth/Course/Layout/CourseDetailView/CourseDetailView";
// import Course from "../containers/Auth/Course/CourseIndex";

import HomeIndex from "../containers/Auth/Home/HomeIndex";
// import ProfileIndex from "../containers/Auth/Profile/ProfileIndex";
// import MyAccount from "../containers/Auth/MyAccount/MyAccountIndex";
// import Setting from "../containers/Auth/MyAccount/Setting";

// import CreateArticle from "../containers/Auth/Post/Article/Article Create/ArticlePost";
// import ArticleView from "../containers/Auth/Post/Article/Article View/ArticleView";

import Home from "../containers/Auth/Home/Layout/Home/Home";
import Profiles from "../containers/Auth/Home/Layout/Profile/Profile";
import Courses from "../containers/Auth/Home/Layout/Course/Course";
import Notification from "../containers/Auth/Home/Layout/Notifications/Notification";

// import MyCourses from "../containers/Auth/Course/Layout/MyCourses/MyCourses";
// import DetailView from "../containers/Auth/Course/Layout/CourseDetailView/CourseDetailView";
// import EditCourse from "../containers/Auth/Course/Layout/CreateCourse/Preview/EditCourse";
// import PreviewCourse from "../containers/Auth/Course/Layout/CreateCourse/PreviewCourse/PreviewCourse";
// import CourseSubtopicPreview from "../containers/Auth/Course/Layout/CreateCourse/PreviewCourse/CourseSubtopicPreview/CourseSubtopicPreview";
// import SubtopicFormat from "../containers/Auth/Course/Layout/CreateCourse/PreviewCourse/SubtopicFormat/SubtopicFormat";

// import CreatePageDetails from "../components/Pages/CreatePage/CreatePageDetails/CreatePageDetails";
// import PageDetailView from "../containers/Auth/Pages/Layout/PageDetailView/PageDetailView";
// import PageIndex from "../containers/Auth/Pages/PageIndex";

// import MyPages from "../containers/Auth/Pages/Layout/MyPages/MyPages";
// import Account from "../containers/Account/Account";

// import Tos from "../components/Tos/Tos";
// import AboutUs from "../components/AboutUs/AboutUs";
// import ContactUS from "../components/ContactUs/ContactUs";
import PathModules from "../Components/Course/CoursePath/pathModules/PathModules";
// import SubTopicEditor from "../containers/Auth/Course/Layout/CreateCourse/Editor/SubTopicEditor";

// unAuth routes
export const PublicRoutes = () =>
  //   <Switch>
  //     <Route exact path='/' component={WelcomePage} />
  //     <Route
  //       path='/login'
  //       component={(props) => <Account {...props} signUpMode={false} />}></Route>
  //     <Route path='/tos' component={Tos} />
  //     <Route path='/aboutus' component={AboutUs} />
  //     <Route path='/contactUs' component={ContactUS} />
  //     <Route exact path='/editProfile/' component={ProfileForm} />
  //     <Route
  //       path='/course/:courseSlug/:topicSlug/:subTopic'
  //       component={CourseSubtopic}
  //     />
  //     <Route path='/course/:courseSlug' component={CourseDetailView} />
  //     <Route path='/explore' component={BrowseCourse} />
  //     <Route path='/notfound' component={PageNotFound} />
  //     <Route path='/article/:articleID' component={ArticleView} />
  //     <Redirect to='/notfound' />
  //   </Switch>
  null;

//auth routes
export const PrivateRoute = () => (
  <Switch>
    {/*   <Route path='/course' component={Course} />
    <Route path='/aboutus' component={AboutUs} />
    <Route path='/contactUs' component={ContactUS} />
    <Route path='/pages' component={PageIndex} />
    <Route path='/my-pages' component={MyPages} />
    <Route path='/my-account/:userSlug/setting' component={Setting} />
    <Route path='/my-account/:userSlug' component={MyAccount} />
    <Route path='/profile/:userSlug' component={ProfileIndex} /> */}
    <Route exact path='/' component={HomeIndex} />
    <Route path='/courses' component={HomeIndex} />
    <Route path='/users' component={HomeIndex} />
    <Route path='/notification' component={HomeIndex} />
    {/*     <Route exact path='/post/:postSlug' component={HomeIndex} />
    <Route path='/article/:articleID' component={ArticleView} /> */}
    <Route path='/notfound' component={PageNotFound} />
    {/*     <Redirect from='/login' to='/' />
    <Redirect from='/explore' to='/courses' />
    <Redirect from='/signup' to='/' />
    <Route path='/create-article' component={CreateArticle} />
    <Route path='/edit-article/:articleID' component={CreateArticle} /> */}
    <Redirect to='/notfound' />
  </Switch>
);

//nested routes

//home page routes

/// icons

export const HomeRoutes = () => (
  <Switch>
    <Route exact path='/' component={Home} />
    {/*  <Route
      path='/post/:postSlug'
      component={(props) => <Home singlePost={true} {...props} />}
    /> */}
    <Route path='/courses/:pathSlug' component={PathModules} />
    <Route path='/courses' component={Courses} />
    <Route path='/users' component={Profiles} />
    <Route path='/notification' component={Notification} />
  </Switch>
);

//course page routes

// export const CourseRoutes = () => (
//   <Switch>
//     <Route path='/course/subtopic/format' component={SubtopicFormat} />
//     <Route
//       path='/course/:courseSlug/preview/:topicSlug/:subtopicSlug'
//       component={CourseSubtopicPreview}
//     />
//     <Route path='/course/:courseSlug/preview' component={PreviewCourse} />
//     <Route path='/course/:courseSlug/edit' component={EditCourse} />
//     <Route
//       path='/course/:courseSlug/:topicSlug/:subtopicSlug/editor/edit'
//       component={SubTopicEditor}
//     />
//     <Route
//       path='/course/:courseSlug/:topicSlug/:subtopicLength/editor'
//       component={SubTopicEditor}
//     />
//     <Route
//       path='/course/:courseSlug/:topicSlug/:subTopic'
//       component={CourseSubtopic}
//     />
//     <Route path='/course/:courseSlug' component={DetailView} />
//     <Route path='/course' component={MyCourses} />
//   </Switch>
// );

//Page Routes
export const PageRoutes = () => {
  // return (
  //   <Switch>
  //     <Route
  //       path='/pages/create'
  //       component={(props) => <CreatePageDetails {...props} edit={false} />}
  //     />
  //     <Route
  //       path='/pages/setting/:pageSlug'
  //       component={(props) => <CreatePageDetails {...props} edit={true} />}
  //     />
  //     <Route path='/pages/:pageSlug' component={PageDetailView} />
  //   </Switch>
  // );
};
