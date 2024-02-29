<template>
 <section onload="window.print()">
    <div id="print" class="container">
        <div class="row">
            <div id="content" class="col-md-12">
                <table class="table table-bordered"> 
                    <tbody> 
                        <tr> 
                            <td style="width:70%;" rowspan="3" class="text-center"><h2 id="invoice-title">فاکتور فروش تجهیزات</h2></td> 
                        </tr>
                        <tr> 
                            <td><strong>شماره سریال:</strong>۱۰۰۳۲۲</td> 
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
                            <td style="width:30%;"><strong>شهر:</strong>تهران</td> 
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
                                <strong>شرایط و نحوه فروش: </strong> نقدی    غیرنقدی   
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
                <p style="color: #999; text-align: left; font-size: 9px; margin-top: 7px;"></p>
            </div>
        </div>
        </div>
    </section>   
</template>

<style scoped>
  @import '@/assets/css/invoice.css';
</style>