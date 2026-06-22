import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Məxfilik Siyasəti | NetSolutions',
  description: 'NetSolutions şirkətinin məxfilik siyasəti və istifadəçi məlumatlarının qorunması qaydaları.',
};

export default function PrivacyPage() {
  return (
    <main className="min-h-screen bg-[#FAFAFA] dark:bg-[#050505] py-24 sm:py-32 transition-colors duration-300">
      <div className="max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-[#0B1120] p-8 md:p-12 lg:p-16 rounded-[32px] shadow-[0_4px_20px_rgba(0,0,0,0.03)] dark:shadow-[0_4px_20px_rgba(0,0,0,0.4)] border border-slate-100 dark:border-slate-800/80 transition-colors duration-300">
          <div className="mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4 transition-colors">Məxfilik Siyasəti</h1>
            <p className="text-sm font-semibold text-slate-400 dark:text-slate-500 uppercase tracking-wide transition-colors">
              Son yenilənmə tarixi: {new Date().toLocaleDateString('az-AZ')}
            </p>
            <p className="mt-4 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
              NetSolutions şirkəti istifadəçilərinin şəxsi məlumatlarının qorunmasına yüksək prioritet verir.
              Bu sənəd məlumatlarınızın necə toplanıldığını, saxlanıldığını, istifadə edildiyini və
              hüquqlarınızı izah edir.
            </p>
          </div>

          <div className="space-y-8 text-[16px] text-slate-600 dark:text-slate-400 leading-relaxed transition-colors">
            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">1. Ümumi Müddəalar</h2>
              <p>
                &quot;NetSolutions&quot; şirkəti olaraq sizin məxfiliyinizə hörmətlə yanaşırıq və şəxsi
                məlumatlarınızın təhlükəsizliyini təmin etməyi özümüzə borc bilirik. Bu Məxfilik Siyasəti,
                veb-saytımızdan (netsolutions.az) istifadə edərkən məlumatlarınızın necə idarə olunacağını
                təsvir edir.
              </p>
              <p className="mt-3">
                Siyasət vaxtaşırı yenilənə bilər. Əhəmiyyətli dəyişikliklər saytda dərc edilir. Məxfilik
                Siyasətinin ən son versiyasını bu səhifədə tapa bilərsiniz.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">2. Topladığımız Məlumatlar</h2>
              <p>
                Saytımızdakı &quot;Əlaqə&quot; forması vasitəsilə bizimlə əlaqə saxladığınız zaman adınız,
                e-poçt ünvanınız, telefon nömrəniz (təqdim etdiyiniz halda) və mesajınız daxil olmaqla,
                yalnız sizin öz istəyinizlə təqdim etdiyiniz məlumatları toplayırıq.
              </p>
              <p className="mt-3">
                Saytımızın fəaliyyətini yaxşılaşdırmaq və təhlükəsizliyi təmin etmək üçün avtomatik olaraq
                bəzi texniki məlumatlar da toplanabilir:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li>IP ünvanı və coğrafi məkan (təxmini);</li>
                <li>Brauzer növü, versiyası və cihaz məlumatları;</li>
                <li>Ziyaret edilən səhifələr, ziyaret vaxtı və davamiyyət müddəti;</li>
                <li>Referrer URL (sayta hansı mənbədən gəldiniz).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">3. Məlumatların İstifadəsi</h2>
              <p>Toplanmış məlumatlar yalnız aşağıdakı məqsədlər üçün istifadə olunur:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li>Sizin sorğu və suallarınıza cavab vermək;</li>
                <li>Sizə uyğun İT xidmətləri, texniki dəstək və kommersiya təklifləri hazırlamak;</li>
                <li>Müştəri əlaqələrinin idarə edilməsi və xidmət keyfiyyətinin artırılması;</li>
                <li>Veb-saytımızın fəaliyyətini, performansını və istifadəçi təcrübəsini optimallaşdırmaq;</li>
                <li>Qanuni tələblərə riayət etmək və hüquqi mübahisələrdə müdafiə təmin etmək.</li>
              </ul>
              <p className="mt-3">
                Məlumatlarınız reklam məqsədində üçüncü tərəflərə satılmır və icazəniz olmadan marketinq
                məktubları göndərilmir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">4. Çərəzlər (Cookies)</h2>
              <p>
                Veb-saytımız funksionallığını təmin etmək, sessiya idarəetməsi və analitika məqsədləri üçün
                çərəzlər (cookies) istifadə edə bilər. Çərəzlər brauzerinizdə saxlanılan kiçik mətn fayllarıdır.
              </p>
              <p className="mt-3">
                Brauzer parametrlərindən çərəzləri silmək və ya bloklamaq imkanı var; bu halda saytın bəzi
                funksiyaları məhdud işləyə bilər. Zəruri texniki çərəzlər saytın əsas işləməsi üçün
                tələb olunur.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">5. Məlumatların Saxlanması</h2>
              <p>
                Şəxsi məlumatlarınız yalnız məqsədinə uyğun lazım olan müddət ərzində saxlanılır. Əlaqə
                forması vasitəsilə göndərilən sorğular adətən 3 il ərzində arxivdə saxlanılır; qanunla
                daha uzun saxlama müddəti tələb olunmadıqda bu müddət bitdikdən sonra məlumatlar silinir
                və ya anonimləşdirilir.
              </p>
              <p className="mt-3">
                Texniki log məlumatları təhlükəsizlik və analitika məqsədləri üçün daha qısa müddət —
                adətən 12 ay — saxlanıla bilər.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">6. Məlumatların Qorunması</h2>
              <p>
                Biz, şəxsi məlumatlarınızı icazəsiz girişlərdən, dəyişikliklərdən, məhvdən və icazəsiz
                paylanmadan qorumaq üçün beynəlxalq standartlara uyğun müasir təhlükəsizlik tədbirləri
                həyata keçiririk. Bunlara şifrələnmiş əlaqə kanalları, məhdud giriş hüquqları, mütəmadi
                təhlükəsizlik yeniləmələri və ehtiyat nüsxələmə prosedurları daxildir.
              </p>
              <p className="mt-3">
                Heç bir internet ötürülmə və ya elektron saxlama metodu tam təhlükəsiz deyil; biz ən yüksək
                səviyyədə qoruma təmin etməyə çalışırıq, lakin mükəmməl təhlükəsizlik zəmanəti vermək
                mümkün deyil.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">7. Üçüncü Tərəflərə Ötürülme</h2>
              <p>
                Məlumatlarınız heç bir halda satılmır. Yalnız aşağıdakı hallarda məhdud şəkildə üçüncü
                tərəflərə ötürülə bilər:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li>Qanun və dövlət orqanlarının tələbi əsasında;</li>
                <li>Texniki infrastruktur (hosting, e-poçt xidməti) təmin edən etibarlı tərəfdaşlara, məlumatların qorunması şərtləri ilə;</li>
                <li>Hüquqi müdafiə və mübahisələrin həlli məqsədilə.</li>
              </ul>
              <p className="mt-3">
                Tərəfdaşlarımız məlumatlarınızı yalnız bizim tapşırığımız həddində və müvafiq təhlükəsizlik
                standartlarına riayət edərək işləyir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">8. İstifadəçi Hüquqları</h2>
              <p>Şəxsi məlumatlarınızla bağlı aşağıdakı hüquqlara maliksiniz:</p>
              <ul className="list-disc pl-5 mt-2 space-y-1.5">
                <li>Məlumatlarınızın işlənməsi haqqında məlumat almaq;</li>
                <li>Yanlış və ya natamam məlumatların düzəldilməsini tələb etmək;</li>
                <li>Məlumatların silinməsini və işlənməsinin məhdudlaşdırılmasını istəmək;</li>
                <li>Məlumatların ötürülməsi (qanunla icazə verilən hallarda);</li>
                <li>İşlənməyə etiraz bildirmək.</li>
              </ul>
              <p className="mt-3">
                Bu hüquqlarızı istifadə etmək üçün{' '}
                <a href="mailto:info@netsolutions.az" className="text-[#0275d8] dark:text-[#3b82f6] hover:underline font-medium transition-colors">
                  info@netsolutions.az
                </a>{' '}
                ünvanına yazın. Sorğunuza 30 gün ərzində cavab veriləcək.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">9. Uşaqların Məxfiliyi</h2>
              <p>
                Veb-saytımız 18 yaşından kiçik şəxslərə məqsədli şəkildə yönəlmir. Bilərəkdən uşaqlardan
                şəxsi məlumat toplamırıq. Belə məlumatın toplandığını aşkar etdikdə dərhal silinəcək.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">10. Siyasət Dəyişiklikləri</h2>
              <p>
                Məxfilik Siyasətini vaxtaşırı yeniləyə bilərik. Əhəmiyyətli dəyişikliklər saytda dərc
                edilir və lazım gələrsə əlaqə forması vasitəsilə bildiriş göndərilir. Dəyişikliklərdən
                sonra saytı istifadə etməyiniz yenilənmiş siyasəti qəbul etdiyiniz anlamına gəlir.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-3 transition-colors">11. Əlaqə</h2>
              <p>
                Bu Məxfilik Siyasəti ilə bağlı hər hansı sualınız, şikayətiniz və ya məlumatlarınızla
                bağlı tələbiniz olarsa, zəhmət olmasa{' '}
                <a href="mailto:info@netsolutions.az" className="text-[#0275d8] dark:text-[#3b82f6] hover:underline font-medium transition-colors">
                  info@netsolutions.az
                </a>{' '}
                ünvanı ilə bizimlə əlaqə saxlayın. Sorğularınızı ən qısa müddətdə cavablandırmaya çalışırıq.
              </p>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}
