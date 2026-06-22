import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'İstifadə Şərtləri | NetSolutions',
  description: 'NetSolutions veb-saytından istifadə şərtləri və qaydaları.',
};

export default function TermsPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#050505] py-24 sm:py-32 transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0B1120] p-8 md:p-12 lg:p-16 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
          <div className="mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">İstifadə Şərtləri</h1>
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide transition-colors">
              Son yenilənmə tarixi: {new Date().toLocaleDateString('az-AZ')}
            </p>
            <p className="mt-4 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
              Bu sənəd NetSolutions.az veb-saytından istifadə qaydalarını, hüquq və məsuliyyətləri müəyyən edir.
              Sayta daxil olmaq və xidmətlərimiz haqqında məlumat almaq bu şərtləri qəbul etməniz deməkdir.
            </p>
          </div>

          <div className="space-y-8 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">1. Şərtlərin Qəbulu</h2>
              <p>
                NetSolutions.az veb-saytına daxil olaraq və ondan istifadə edərək, siz bu İstifadə Şərtləri və
                qaydaları ilə tam razılaşdığınızı bəyan edirsiniz. Əgər bu şərtlərlə razı deyilsinizsə, xahiş
                edirik saytımızdan istifadəni dayandırasınız.
              </p>
              <p className="mt-3">
                Şərtlər vaxtaşırı yenilənə bilər. Yenilənmiş versiya saytda dərc edildikdən sonra qüvvəyə minir.
                Dəyişikliklərdən xəbərdar olmaq üçün bu səhifəni mütəmadi yoxlamanız tövsiye olunur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">2. Təriflər</h2>
              <p>
                Bu sənəddə &quot;Şirkət&quot;, &quot;NetSolutions&quot;, &quot;biz&quot; ifadələri NetSolutions
                şirkətini; &quot;Sayt&quot; netsolutions.az domenində yerləşən veb-saytı; &quot;İstifadəçi&quot;
                sayta daxil olan və ondan istifadə edən hər bir fiziki və ya hüquqi şəxsi; &quot;Xidmətlər&quot;
                isə şirkətin təqdim etdiyi İT texniki xidmətlər, şəbəkə həlləri, helpdesk, server sistemləri,
                proqram təminatı və digər texnoloji xidmətləri ifadə edir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">3. Saytın Məqsədi və Xidmətlər</h2>
              <p>
                Veb-saytımız bizneslərə təqdim etdiyimiz İT həlləri haqqında məlumat vermək, potensial
                müştərilərlə əlaqə qurmaq və texniki dəstək sorğularını qəbul etmək məqsədi daşıyır. Saytda
                göstərilən xidmət təsvirləri, qiymətlər və şərtlər ümumi məlumat xarakteri daşıyır; konkret
                layihələr üçün fərdi kommersiya təklifləri hazırlanır.
              </p>
              <p className="mt-3">
                NetSolutions kompüter və noutbuk təmiri, helpdesk xidmətləri, kamera nəzarət sistemləri,
                şəbəkə infrastrukturu, 1C proqram təminatı, veb saytların hazırlanması və server sistemlərinin
                qurulması kimi geniş çeşiddə texnoloji xidmətlər təqdim edir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">4. İstifadəçi Məsuliyyətləri</h2>
              <p>İstifadəçi saytdan istifadə edərkən aşağıdakılara riayət etməlidir:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li>Qanunvericiliyə və ictimai əxlaq normalarına uyğun davranmaq;</li>
                <li>Əlaqə formasında doğru və aktual məlumat təqdim etmək;</li>
                <li>Saytın texniki infrastrukturuna, serverlərə və təhlükəsizlik sistemlərina zərər verməmək;</li>
                <li>Avtomatik botlar, skriptlər və ya zərərli proqramlar vasitəsilə sayta müdaxilə etməmək;</li>
                <li>Üçüncü şəxslərin hüquqlarını pozan məzmun paylaşmamak.</li>
              </ul>
              <p className="mt-3">
                Bu qaydaların pozulması halında şirkət istifadəçinin sayta girişini məhdudlaşdırmaq və qanuni
                tədbirlər görmək hüququna malikdir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">5. İntellektual Mülkiyyət</h2>
              <p>
                Saytda yerləşdirilən bütün materiallar — mətnlər, qrafiklər, loqolar, ikonlar, dizayn elementləri,
                proqram kodu və struktur — NetSolutions şirkətinin və ya onun tərəfdaşlarının intellektual
                mülkiyyətidir və müvafiq müəllif hüquqları qanunları ilə qorunur.
              </p>
              <p className="mt-3">
                Materialların icazəsiz kopyalanması, paylanması, dəyişdirilması, ictimaiyyətə təqdim edilmesi və
                kommersiya məqsədində istifadəsi qəti qadağandır. Şirkətin yazılı icazəsi olmadan heç bir
                materialın istifadəsi hüquqi məsuliyyət yaradır.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">6. Üçüncü Tərəf Linkləri</h2>
              <p>
                Saytımızda üçüncü tərəf veb-saytlarına keçid linkləri yerləşdirilə bilər. Bu linklər yalnız
                istifadəçilərə əlavə məlumat təqdim etmək məqsədi daşıyır. NetSolutions həmin saytların
                məzmununa, təhlükəsizlik siyasətinə və fəaliyyətinə görə məsuliyyət daşımır.
              </p>
              <p className="mt-3">
                Üçüncü tərəf saytlarına keçid etdikdə həmin saytların öz istifadə şərtləri və məxfilik
                siyasətləri tətbiq olunur. İstifadəçi bu keçidləri öz riski altında istifadə edir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">7. Xidmətlərin Dəyişdirilməsi və Mövcudluğu</h2>
              <p>
                NetSolutions, saytda təqdim olunan xidmətləri, məlumatları, texniki parametrləri və ya bu
                İstifadə Şərtlərini əvvəlcədən xəbərdarlıq etmədən dəyişdirmək, dayandırmaq və ya ləğv etmək
                hüququnu özündə saxlayır.
              </p>
              <p className="mt-3">
                Texniki nasazlıqlar, server baxımı, təhlükəsizlik yeniləmələri və digər səbəblərə görə saytın
                müvəqqəti əlçatan olmaması halında şirkət məsuliyyət daşımır. Mümkün qədər qısa müddətdə
                xidmətin bərpası üçün çalışırıq.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">8. Məhdud Məsuliyyət</h2>
              <p>
                Saytda təqdim olunan məlumatlar ümumi xarakter daşıyır və peşəkar məsləhət əvəzinə
                istifadə edilməməlidir. Şirkətimiz bu məlumatların tam dəqiqliyinə, aktuallığına və
                tamlığına zəmanət vermir.
              </p>
              <p className="mt-3">
                Saytdan istifadə nəticəsində yarana biləcək hər hansı birbaşa, dolayı, təsadüfi və ya
                nəticə zərərlərə, məlumat itkisine və ya biznes fəaliyyətininə təsir edən hallara görə
                NetSolutions məsuliyyət daşımır. Bu məhdudiyyət qanunla icazə verilən ən geniş həddə tətbiq olunur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">9. Mübahisələrin Həlli</h2>
              <p>
                Bu İstifadə Şərtləri ilə bağlı hər hansı mübahisə və ya fərqli düşüncə əvvəlcə dostluq
                yolu ilə həll edilməyə cəhd olunur. Razılıq əldə olunmadıqda mübahisələr Azərbaycan
                Respublikasının qanunvericiliyi əsasında və Bakı şəhəri məhkəmələrinin yurisdiksiyasında
                həll edilir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">10. Əlaqə</h2>
              <p>
                İstifadə Şərtləri ilə bağlı suallarınız üçün bizimlə{' '}
                <a href="mailto:info@netsolutions.az" className="text-[#0275d8] dark:text-[#3b82f6] hover:underline font-medium transition-colors">
                  info@netsolutions.az
                </a>{' '}
                e-poçt ünvanı və ya saytdakı əlaqə forması vasitəsilə əlaqə saxlaya bilərsiniz.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
