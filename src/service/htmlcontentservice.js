

import axios from "axios";
import request from "../config/request";
import api from "./API";
import { ApiEndPoints } from "../config/apiconfig";

const qs = require("qs")



class HomeService {
     async GetSiteInfo() {
        try {
            

            const resp = await (await request()).get(api.WebsiteInfo.SiteInfo)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }

        }
    }
     async GetSiteMenu(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.SiteMenu.List + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }

        }
    }
     async GetLogo() {
        try {
            const resp = await (await request()).get(api.Logo.logo)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }

        }
    }
     async GetBannerImageList(pageNo, pageSize, key) {
        try {
            const resp = await (await request()).get(api.BannerImage.ListFromKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }

        }
    }
    async GetBannerImageListbyKey(pageNo, pageSize, key,language) {
        try {
            const resp = await (await request()).get(api.BannerImage.ListFromKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key+ "&language=" +language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }

        }
    }
     async GetFAQHomeList(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.FAQ.ListHome + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }

        }
    }
    async GetFAQHomeListbyKey(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.FAQ.ListHome + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }

        }
    }


    
     async GetNoticeScrollerList(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.NoticeScroller.Listbykey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetNoticeScrollerPublished(pageNo, pageSize, query, language) {
        try {
            const resp = await (await request()).get(api.NoticeScroller.ListPublished + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&query=" + query + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetNoticePopupList(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.NoticePopup.ListbyKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetNoticePopupDetail(Id, language) {
        try {
            const resp = await (await request()).get(api.NoticePopup.Detail + "?Id=" + Id + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetHtmlContentList(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.HtmlContent.ListFromKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
    async GetHtmlContentListbyKey(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.HtmlContent.ListFromKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetHtmlContentListbyPage(PageName) {
        try {
            const resp = await (await request()).get(api.HtmlContent.ListbyPage + "?PageName=" + PageName )
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetTeamsListbyKey(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.Teams.ListFromKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetNewsbyKey(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.News.ListFromKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetNewsDetail(slug) {
        try {
            const resp = await (await request()).get(api.News.NewsDetail +"?Slug=" + slug )
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetDownloadsbyKey(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.Downloads.ListFromKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetAllReports(pageNo, pageSize, language) {
        try {
            const resp = await (await request()).get(api.Downloads.List + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetBranches(settingKey, language) {
        try {
            const resp = await (await request()).get(api.Branches.List + "?settingKey=" + settingKey + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
   
     async GetVacancyList(pageNo, pageSize, query, language) {
        try {
            const resp = await (await request()).get(api.Vacancy.List + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&query=" + query + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetVacancyDetails(Id) {
        try {
            const resp = await (await request()).get(api.Vacancy.Details + "?Id=" + Id)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async GetTestimonialsbyKey(pageNo, pageSize, key, language) {
        try {
            const resp = await (await request()).get(api.Testimonials.ListbyKey + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&key=" + key + "&language=" + language)
            return resp.data

        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async SendMessage(formData) {
        try {
            const res = await (await request()).post(api.SendQuery.Save, qs.stringify(formData));
            return await res.data;

        }
        catch (error) {
            return {
                Message: error?.response?.statusText,
                Code: error?.response?.status,
                Data: null,
            }
        }
    }
     async GetProvienceList(pageNo, pageSize, type, key, language) {
        try {
            const resp = await (await request()).get(api.Province.List + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&type=" + type + "&key=" + key + "&language=" + language)
            return resp.data
        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async SaveVacancy(model) {
        try {
            var form_data = new FormData();
            for (var key in model) {
                if (model[key] != null && model[key] != '')
                    form_data.append(key, model[key] != null ? model[key] : '');
            }
            const res = await (await request()).post(api.SaveVacancy.Save, form_data, {
                headers: {
                    'content-type': 'multipart/form-data'
                }
            });

            const response = await res.data;
            return {
                Data: response.Data,
                Message: response.Message,
                Code: response.Code,
            }
        }
        catch (error) {
            return {
                Message: error?.response?.statusText,
                Code: error?.response?.status,
                Data: null,
            }
        }
    }
     async SeoList(url) {
        
        try {
            const resp = await (await request()).get(api.Seo.List + "?url=" + url)
            return resp.data
        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
     async NewsLetter(formData) {
        try {
            const res = await (await request()).post(api.NewsLetter.Subscribe, qs.stringify(formData));
            return await res.data;

        }
        catch (error) {
            return {
                Message: error?.response?.statusText,
                Code: error?.response?.status,
                Data: null,
            }
        }
    }

     async getSeoByPage(url) {

        try {
            var normalized = "/"
            if (url != null && url != "") {
                normalized = normalized = url.split("?")[0];
            }
            const res = await axios.get(ApiEndPoints.api + "/seo/getbypage" + `?url=${normalized}`);
            if (res != null && res.data != null && res.data.Code == 200) {
                return JSON.stringify(res.data.Data);
            } else {
                return {};
            }
        }
        catch (error) {
            return {
                Message: error?.message,
                Code: error?.status,
                Data: null,
                loading: false
            }
        }
    }
     async GetWebGalleryList(pageNo, pageSize, query) {
        try {
            const resp = await (await request()).get(api.WebGallery.List + "?pageNo=" + pageNo + "&pageSize=" + pageSize + "&query=" + query)
            return resp.data
        } catch (error) {
            return {
                Message: error.Message,
                Data: null,
                Code: error.status
            }
        }
    }
    async GetWebGallaryListByKey(pageNo,pageSize, key,query) {
        try{
            const resp= await (await request()).get(api.WebGallery.ListByKey + "?pageNo=" +pageNo + "&pageSize=" + pageSize+"&key="+key +"&query=" + query)
            return resp.data
        }catch(error){
            return{
                Message:error.Message,
                Data:null,
                Code:error.status
            }
        }
    }
    async GetBlogRecent(pageNo, pageSize, query){
        try{
            const resp=await (await request()).get(api.Blogs.RecentList + "?pageNo="+pageNo+ "&pageSize=" + pageSize+ "&query="+query)
            return resp.data
        }
        catch(error){
            return{
                Message:error.Message,
                Data:null,
                Code:error.status
            }
        }
    }
    async GetBlogTags(pageNo, pageSize, query){
        try{
            const resp=await(await request()).get(api.Blogs.PopularTag + "?pageNo=" +pageNo+ "&pageSize=" +pageSize+ "&query=" +query)
            return resp.data
        }
        catch(error){
            return{
                Message:error.Message,
                Data:null,
                Code:error.status
            }
        }
    }
    async GetBlogList(pageNo, pageSize, query){
        try{
            const resp=await(await request()).get(api.Blogs.BlogList + "?pageNo=" +pageNo+ "&pageSize=" +pageSize+ "&query=" +query)
            return resp.data
        }
        catch(error){
            return{
                Message:error.Message,
                Data:null,
                Code:error.status
            }
        }
    }
    async GetBlogdetails(slug){
        try{
            const resp=await(await request()).get(api.Blogs.BlogDetails + "?slug=" +slug)
            return resp.data
        }
        catch(error){
            return{
                Message:error.Message,
                Data:null,
                Code:error.status
            }
        }
    }
}


export default new HomeService()