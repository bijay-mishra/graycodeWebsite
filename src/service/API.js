import { ApiEndPoints } from "../config/apiconfig";


let API = {};

export default API = {
  WebsiteInfo: {
    SiteInfo: ApiEndPoints.api + "/admin/websettings/siteinfo/get",
  },
  Logo: {
    logo: ApiEndPoints.api + "/admin/websettings/siteinfo/get",
  },
  BannerImage: {
    ListFromKey: ApiEndPoints.api + "/banners/list/bykey",
  },
  FAQ: {
    ListHome: ApiEndPoints.api + "/FAQ/list/published/SettingKey",
  },
  NoticeScroller: {
    Listbykey: ApiEndPoints.api + "/noticescroller/list/published/SettingKey",
    ListPublished:ApiEndPoints.api+"/noticescroller/list/published"
  },
  HtmlContent: {
    ListFromKey: ApiEndPoints.api + "/htmlcontent/list/bySettingkey",
    ListbyPage: ApiEndPoints.api + "/htmlcontent/list/HtmlContentByPage",
  },
  Teams: {
    ListFromKey: ApiEndPoints.api + "/teams/list/SettingKey",
  },
  News: {
    ListFromKey: ApiEndPoints.api + "/news/list/SettingKey",
    NewsDetail: ApiEndPoints.api + "/news/details",
  },
  Downloads: {
    ListFromKey: ApiEndPoints.api + "/downloads/list/SettingKey",
    List:ApiEndPoints.api+"/downloads/list"
  },
  Branches: {
    List: ApiEndPoints.api + "/branchInformation/listactive/bysettingkey",
  },
  Vacancy: {
    List: ApiEndPoints.api + "/vacancy/list",
    Details: ApiEndPoints.api + "/vacancy/details",
  },
  Testimonials: {
    ListbyKey: ApiEndPoints.api + "/testimonial/list/SettingKey",
  },
  SendQuery: {
    Save: ApiEndPoints.api + "/contactus/save",
  },
  Province: {
    List: ApiEndPoints.api + "/general/setup/list",
  },
  SaveVacancy: {
    Save: ApiEndPoints.api + "/vacancyapplication/save",
  },
  Seo: {
    List: ApiEndPoints.api + "/seo/getbypage",
  },
  NewsLetter: {
    Subscribe: ApiEndPoints.api + "/newsletter/Subscribe",
  },
  NoticePopup: {
    ListbyKey: ApiEndPoints.api + "/noticepopup/list/published/SettingKey",
    Detail: ApiEndPoints.api + "/noticepopup/details",
  },
  SiteMenu:{
    List:ApiEndPoints.api+"/site/menu/list/SettingKey"
  },
  WebGallery:{
    List: ApiEndPoints.api + "/webgallery/list",
    ListByKey:ApiEndPoints.api+"/webgallery/listbyKey"
  },
  Blogs:{
   RecentList:ApiEndPoints.api + "/blogs/recent",
   PopularTag:ApiEndPoints.api + "/blogs/popular/tags",
   BlogList:ApiEndPoints.api + "/blogs/list",
   BlogDetails:ApiEndPoints.api + "/blogs/details"
  }
  
};