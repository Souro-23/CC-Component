
// const  root='https://manas10.pythonanywhere.com/'  
//const root = "https://server.citizenchoice.in/";
const root = "https://manas10.pythonanywhere.com/";
//const root = 'http://127.0.0.1:8000/'


//Named Imports

//Unauth pages Api

  







//Course api
export const  Browse_Course = root+'course/fetch/popular/courses'
export const Subtopic_Content =root+'course/fetch/course/subtopic/' 
export const Course_Details = root+'course/fetch/course/'
export const Course_post = root+'course/fetch/course/timeline/'
export const Course_detail_view = root +'course/fetch/course/'
export const Course_enroll = root + 'course/update/enroll/'
export const Course_subtopic = root+ 'course/update/subtopic'
export const Edit_Course_page = root+'course/editpage/course/'
export const Course_post_update = root+'course/update/course_post/'
export const Create_topic_edit_course = root+'course/update/topic/'
export const Create_topic_description= root+'course/update/topic/'
export const Course_update  = root+'course/update/course/'
export const Created_course = root + 'course/fetch/created_courses'
export const Update_course = root + 'course/update/course'
export const Course_subtopic_sno = root +'course/update/subtopic/sno/'
export const Course_topic_sno = root+ 'course/update/topic/sno/'
export const Enrolled_course = root+'course/fetch/enrolled_courses'
export const Suggested_course = root+'course/fetch/suggested_courses'
export const Course_search = root+'search/course/' 
export const Course_publish = root+'course/publish/'
export const User_courses = root + 'course/fetch/published/'
export const Course_path = root+ 'path/'
  

//post Api 
export const Feed_post_comment = root+'comment/comment/'
export const Feed_post_comment_subcomments = root+'comment/comment/' 
export const Feed_post_liked = root+'comment/like/'
export const Feed_post_update_comment = root+'comment/comment/'
export const Get_timeline = root+'post/get/timeline/'
export const Get_notification = root+'notifications/get/-1/'
export const Suggested_friends = root+'friends/suggestedfriends/'
export const Get_profile = root+'profile/get/'
export const Get_friendlist = root + 'friends/friendlist/'
export const Get_user_timeline = root+'post/get/timeline/-1/'
export const Comment_coursePost = root+'comment/comment/course_post/'
export const Comment_like_course = root+'comment/like/course/'
export const Post = root + 'post/update/feed'
export const RePost = root + 'post/share/'
export const ReportPost = root + "review/post/report";



//Article Post 
export const ArticleAPI = root + "post/update/article";	
export const GetArticle = root + "post/get/article/suggestions";




//pages Api

export const Create_page = root+'page/post/'
export const My_created_pages = root+'page/mypages/'
export const Page_details_view = root+'page/get/'
export const Follow_page = root+"page/follow/"
export const Delete_page = root+ "page/put/"
export const Edit_page= root+ "page/put/"
export const Get_page_timeline = root+"page/get/timeline/"
export const Page_feedPost = root+ "post/update/page/feed/"
export const GetPageSuggestions = root + "page/suggestions/";

//account api
export const Get_refresh_token = root+'auth/api/token/refresh/'
export const Get_token =root +'auth/login/'
export const Signup_url = root+'signup'
export const Signup_username_check = root+'profile/check/username'
export const User_Education_Details = root+'profile/education/'

//api related to request status
export const Get_request_status = root+'friends/requests/status/get/'
export const Send_request = root+'friends/request/send/'
export const Remove_request = root+'friends/request/deleted/'
export const Accept_request = root+'friends/request/accepted/'
export const Rejected_request = root+'friends/request/rejected/'
export const Unfriends_request = root+'friends/request/unfriend/'


//email verification
export const  emailVerifyToken=root+'auth/email-verify'
export const  verify_Email=root+'auth/email-verify-token'


export const request_reset_password = root + 'auth/request-reset-password/'
export const reset_password = root + 'auth/password-reset/'
export const password_reset_complete = root +'auth/password-reset-complete' 


/// google login  ///
export const google_login = root+'auth/google/'




// search Api
export const course_searchAPI = 'https://search-citizenchoice-search-u4tcuhqztudywaic56or6a7rw4.us-east-2.es.amazonaws.com/courses/_search'