const pages = {"post_edit/#new" : "ارسال مطلب جدید" ,
"posts" : "فهرست مطالب" ,
"pages" : "صفحات مستقل و منوساز" ,
"categories" : "طبقه بندی موضوعی" ,
"tags" : "کلمات کلیدی" ,
"my_comments" : "نظرات ارسالی" ,
"comments" : "نظرات دریافتی" ,
"daily_links" : "پیوندهای روزانه" ,
"links" : "پیوندها" ,
"followed_blogs" : " وبلاگ‌هایی که دنبال می‌کنم " ,
"followers" : "فهرست دنبال کنندگان" ,
"visitors" : "آمار و گزارش‌ها" ,
"mediapanel" : " bayanbox صندوق بیان" ,
"templates" : "انتخاب قالب جدید" ,
"template_edit/current" : "ویرایش ساختار قالب فعلی" ,
"template_css_edit/current" : "ویرایش CSS قالب فعلی" ,
"copy_info" : "گزارش کپی‌برداری‌ها" ,
"sms" : "امکانات پیامکی" ,
"migration" : "مهاجرت" ,
"domains" : "دامنه اختصاصی" ,
"packages" : "امکانات اختیاری" ,
"info" : "مشخصات اولیه" ,
"settings" : "تنظیمات ساده" ,
"advanced_settings" : "تنظیمات پیشرفته" ,
"dash_settings" : "تنظیمات مرکز مدیریت" ,
"authors" : "نویسندگان" ,
"new_blog" : "ثبت سایت جدید" ,
};
const blog = document.title.split("::")[1].trim();
const path = window.location.href;
Object.keys(pages).forEach(t => {
if (path.includes(t)) {
  document.title = pages[t] + " :: " + blog
}
}
)
