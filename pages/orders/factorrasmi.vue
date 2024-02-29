<template>
<div id="main rinvoice" class="container">
        <div class="row">
            <div id="content" class="col-md-12">
                <table class="table table-bordered"> 
                    <tbody> 
                        <tr> 
                            <td style="width:70%;" rowspan="3" class="text-center"><h2 id="invoice-title">فاکتور فروش تجهیزات</h2></td> 
                        </tr>
                        <tr> 
                            <td><strong>شماره سریال: </strong>۱۰۰۳۲۲</td> 
                        </tr>
                        <tr> 
                            <td><strong>تاریخ: </strong>۱۳۹۶/۹/۲۷</td> 
                        </tr>
                    </tbody>  
                </table>

                <table class="table table-bordered"> 
                    <tbody> 
                        <tr class="active"> 
                            <th class="text-center">مشخصات فروشنده</th> 
                        </tr> 
                    </tbody>  
                </table>
                <table class="table table-bordered"> 
                    <tbody> 
                        <tr> 
                            <td style="width:45%;"><strong>نام شخص حقیقی/حقوقی: </strong>شرکت پردازش ابری</td> 
                            <td style="width:25%;"><strong>شماره اقتصادی: </strong>۱۲۳۴۵۶۷۸</td>
                            <td style="width:30%;"><strong>شماره ثبت/شماره ملی: </strong>۹۸۷۶۵۴۳۰</td>
                        </tr>
                    </tbody>  
                </table>
                <table class="table table-bordered"> 
                    <tbody>
                        <tr> 
                            <td style="width:25%;"><strong>نشانی کامل: استان: </strong>تهران</td> 
                            <td style="width:20%;"><strong>شهرستان: </strong>تهران</td> 
                            <td style="width:25%;"><strong>کدپستی: </strong>۱۲۲۳۴۵۶۷</td> 
                            <td style="width:30%;"><strong>شهر:</strong> تهران</td> 
                        </tr>
                    </tbody>  
                </table>
                <table class="table table-bordered"> 
                    <tbody>
                        <tr> 
                            <td style="width:70%;"><strong>نشانی: </strong>ونک، خیابان ملاصدرا، خیابان شیراز شمالی</td> 
                            <td style="width:30%;"><strong>شماره تلفن: </strong>۸۸۶۲۴۱۶۸</td> 
                        </tr> 
                    </tbody>  
                </table>

                <table class="table table-bordered"> 
                    <tbody> 
                        <tr class="active"> 
                            <th class="text-center">مشخصات خریدار</th> 
                        </tr> 
                    </tbody>  
                </table>
                <table class="table table-bordered"> 
                    <tbody> 
                        <tr> 
                            <td style="width:45%;"><strong>نام شخص حقیقی/حقوقی: </strong>نوآوران جوان</td> 
                            <td style="width:25%;"><strong>شماره اقتصادی: </strong>۹۸۷۶۵۴۲</td> 
                            <td style="width:30%;"><strong>شماره ثبت/شماره ملی: </strong>۱۲۳۴۵۶۷۰۰</td>
                        </tr>
                    </tbody>  
                </table>
                <table class="table table-bordered"> 
                    <tbody>
                        <tr> 
                            <td style="width:25%;"><strong>نشانی کامل: استان: </strong>اصفهان</td> 
                            <td style="width:20%;"><strong>شهرستان: </strong>اصفهان</td> 
                            <td style="width:25%;"><strong>کدپستی: </strong>۲۲۳۴۵۱</td> 
                            <td style="width:30%;"><strong>شهر: </strong>اصفهان</td> 
                        </tr>
                    </tbody>  
                </table>
                <table class="table table-bordered"> 
                    <tbody>
                        <tr> 
                            <td style="width:70%;"><strong>نشانی: </strong>میدان امام خیمینی، خیابان چهار باغ، پلاک ۱۲۳</td> 
                            <td style="width:30%;"><strong>شماره تلفن: </strong>۱۲۳۴۵۶۷</td> 
                        </tr> 
                    </tbody>  
                </table>

                <table class="table table-bordered"> 
                    <tbody> 
                        <tr class="active"> 
                            <th class="text-center">مشخصات کالا یا خدمات مورد معامله</th> 
                        </tr> 
                    </tbody>  
                </table>
                <table id="invoice-table" class="table table-bordered text-center"> 
                    <tbody> 
                        <tr class="thead"> 
                            <th>ردیف</th> 
                            <th>کد کالا</th> 
                            <th>شرح کالا یا خدمات</th> 
                            <th>تعداد/مقدار</th> 
                            <th>واحد اندازه گیری</th> 
                            <th>مبلغ واحد (ریال)</th> 
                            <th>مبلغ کل (ریال)</th> 
                            <th>مبلغ تخفیف (ریال)</th> 
                            <th>مبلغ کل پس از تخفیف (ریال)</th> 
                            <th>جمع مالیات و عوارض (ریال)</th> 
                            <th>جمع مبغ کل بعلاوه جمع مالیات و عوارض (ریال)</th> 
                        </tr> 

                        <tr class="invoice-row">
                            <td>۱</td>
                            <td>۳۷۲</td>
                            <td>هارد وسترن</td>
                            <td>۳</td>
                            <td>عدد</td>
                            <td>۴,۳۵۰,۰۰۰</td>
                            <td>۱۳,۰۵۰,۰۰۰</td>
                            <td>۷۳۰,۰۰۰</td>
                            <td>۱۲,۳۲۰,۰۰۰</td>
                            <td>۰</td>
                            <td>۱۲,۳۲۰,۰۰۰</td>
                        </tr>

                        <tr class="invoice-row">
                            <td>۲</td>
                            <td>۴۳۳</td>
                            <td>پاور گرین ۵۰۰۰</td>
                            <td>۲</td>
                            <td>عدد</td>
                            <td>۷,۰۰۰,۰۰۰</td>
                            <td>۱۴,۰۰۰,۰۰۰</td>
                            <td>۰</td>
                            <td>۰</td>
                            <td>۰</td>
                            <td>۱۴,۰۰۰,۰۰۰</td>
                        </tr>

                        <tr class="invoice-row">
                            <td>۳</td>
                            <td>۲۵۴</td>
                            <td>کابل شبکه</td>
                            <td>۵۰</td>
                            <td>متر</td>
                            <td>۵۰,۰۰۰</td>
                            <td>۲,۵۰۰,۰۰۰</td>
                            <td>۰</td>
                            <td>۰</td>
                            <td>۰</td>
                            <td>۲,۵۰۰,۰۰۰</td>
                        </tr>
                            
                        <tr> 
                            <th style="width:50%;" scope="row" colspan="6">جمع کل</th> 
                            <td>۲۹,۵۵۰,۰۰۰</td> 
                            <td>۷۳۰,۰۰۰</td> 
                            <td>۲۸,۸۲۰,۰۰۰</td> 
                            <td>۰</td> 
                            <td>۲۸,۸۲۰,۰۰۰</td> 
                        </tr>
                    </tbody> 
                </table>
                <table class="table table-bordered text-right"> 
                    <tbody>
                        <tr> 
                            <td style="width:50%;">
                                <strong>شرایط و نحوه فروش: </strong> نقدی  /  غیرنقدی   
                            </td> 
                            <td style="width:50%;">
                            </td> 
                        </tr> 
                        <tr> 
                            <td style="width:50%;"><strong>توضیحات: </strong>
                            بابت قرارداد نمایندگی ۱۲۳۲۱
                            </td> 
                            <td style="width:50%;">
                            </td> 
                        </tr>
                    </tbody>  
                </table>
                <table class="table table-bordered"> 
                    <tbody>
                        <tr> 
                            <td style="width:50%;" class="text-center">
                                <strong>مهر و امضای فروشنده </strong>
                                <br>
                                <img style="margin:0;" src="//cdn.hesabit.com/img/sample/sig_small.png" />
                            </td> 
                            <td style="width:50%; vertical-align: top;" class="text-center"><strong>مهر و امضای خریدار</strong></td> 
                        </tr> 
                    </tbody>  
                </table>
                
            </div>

            <div id="footer" class="col-md-12">
                <div class="row">
                    <div id="payment" class="col-md-6">
                        <button onClick="alert('ارسال به درگاه بانک در فاکتور نمونه غیر فعال است !')" class="btn btn-success btn-sm button-pay">پرداخت آنلاین</button> <small class="text-muted">  (مبلغ فاکتور را از طریق درگاه آنلاین پرداخت کنید)</small>
                    </div>
                    <div id="icons" class="col-md-6 text-left">
                        <a v-on:click.prevent="invoiceModal = !invoiceModal" class="info-links" data-toggle="modal" data-target="#rules"><i class="fa fa-info" title="راهنما"></i></a>

                        <a target="_blank" class="info-links" href="factor-rasmi/?print=true">
                            <i class="fa fa-print" aria-hidden="true"></i>
                        </a>
                        <a target="_blank" class="info-links" href="factor_rasmi.pdf">
                            <i class="fa fa-file-pdf-o" aria-hidden="true"></i>
                        </a>
                    </div>
                </div>
            </div>

  

</div>
</div>

<transition-group name="modal">
    <div v-if="invoiceModal">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div v-if="invoiceModal" class="fixed top-0 left-0 z-50 flex w-full h-full transition-opacity duration-300 font-fa overflow-hidden">
            <div v-on:click.prevent="invoiceModal = !invoiceModal" class="absolute inset-0 transition-opacity duration-300 bg-black/20"></div>
            <div class="relative rounded-lg shadow-lg shadow-gray-300/40    bg-white w-full  m-auto left-0 right-0 max-w-6xl">
                <button v-on:click.prevent="invoiceModal = !invoiceModal" type="button" class="z-[1] absolute w-8 h-8 text-gray-400 transform translate-x-5 -translate-y-3 transition-transform hover:translate-x-4 hover:transition-transform hover:duration-300 bg-white rounded-md shadow-md flex items-center justify-center">
                        <i class="text-lg fa fa-times"></i>
                      </button>
                <div class="text-right inline-flex items-center pr-8 py-4 border-b w-full">
                    <div class="info">
                        <div class="text-xl font-semibold block text-gray-500">قوانین </div>
                    </div>
                </div>
    


            <div class="modal-body">
                <p>
                شما با استفاده ازاین وب‌سایت در گام اول، کلیه قوانین ذیل را خواهید پذیرفت. در نظر داشته باشید که مورد معامله و خرید باید مطابق با قوانین سایت و قوانین جمهوری اسلامی ايران باشد  و سایت هیج مسئولیتی در قبال مورد معامله و تحویل آن ندارد و تمامی مسئولیت متوجه فروشنده است .
                </p>
                <p>
                تمامی کسورات قانونی و مالیات معامله برعهده فروشنده خواهد بود .
                </p>
                <p>
                خریدار موظف است تمام اطلاعات فاکتور را به دقت مطالعه کند و فقط در صورت اطمینان از صحت آن اقدام به پرداخت نماید چرا که در صورت سوء استفاده های احتمالی، مسئوليتی بر عهده سایت نخواهد بود .
                </p>
                <p>
                سن قانونی برای استفاده از خدمات وب‌سایت 18 سال به بالا است. افراد زیر 18 سال می‌باست تحت نظر والدین یا قیم قانونی خود از وب‌سایت استفاده کنند. 
                </p>
                <p>
                محتوای ارایه شده در این وب‌سایت تنها جنبه اطلاعاتی داشته و تمامی کالاهای ارائه شده متعلق به فروشندگان است. 
                </p>
                <p>
                کاربران نباید از آدرس ایمیل یا نام غیر معتبر استفاده کنند، در غیر این صورت سایت می‌تواند حساب کاربری فرد را توقیف کند.
                </p>
                <p>
                     خرید و فروش در موارد زیر، مجاز نمیباشد:
                </p>
               
               
                <ul>
                    <li>اموال غیرمنقول</li>
                    <li>کارت‌ های بخت‌آزمایی، قمار و شرط‌ بندی</li>
                    <li>خرید و فروش vpn و موارد عبور از فیلترینگ جمهوری اسلامی ایران</li>
                    <li>کالاهایی که به نحوی حقوق ناشر را رعایت نمیکنند (خلاف قواین کپی رایت)</li>
                    <li>کالاهایی که به تایید وزارت فرهنگ و ارشاد اسلامی جمهوری اسلامی ایران نرسیده باشند</li>
                    <li>سیگار و سایر مواد دخانی</li>
                    <li>مواد مخدر و روان‌گردان</li>
                    <li>مشروبات الکلی و نوشیدنی‌های غیرمجاز</li>
                    <li>انواع سلاح‌های گرم و سرد</li>
                    <li>کالاهایی که مبادله آنها دارای مقررات و نظامات خاص است</li>
                    <li>کالاهایی که برای مصرف‌کننده خطر جدی و جانی به دنبال دارد</li>
                    <li>کالاهایی که مبادله آنها طبق قانون جمهوری اسلامی ایران ممنوع است</li>
                    <li>کالاهایی که مبادله آنها مغایر با آداب اسلامی است</li>
                    <li>کالاهایی که انجام فعالیت‌های غیرقانونی را به نحوی تشویق یا تسهیل می‌کنند</li>
                    <li>کالاهای قاچاق</li>
                    <li>کالاهای به‌دست‌آمده از ارتکاب جرم یا نقض مقررات كشوری و لشكری</li>
                </ul>
              <p>
               متن فوق خلاصه ای از قوانین است و شرح کامل قوانین سایت در <a target="_blank" href="/pages/rules">+این آدرس</a> در دسترس کاربران است .

              </p>
               
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default pull-right" v-on:click.prevent="invoiceModal = !invoiceModal">خواندم</button>
            </div>
        </div>
    </div>
</div>
</div>
</div>



    </transition-group> 
</template>

<script>
export default {
    components: {
        // invoiceModal
        
    },

    data() {
        return {

            invoiceModal: false,
        };
    },

};
</script>

<style scoped>
  @import '@/assets/css/invoice.css';
</style>