import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Head from 'next/head';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import WorkspaceSection from '../components/WorkspaceSection';
import PricingSection from '../components/PricingSection';
import DashboardSection from '../components/DashboardSection';
import TeamSection from '../components/TeamSection';
import TestimonialsSection from '../components/TestimonialsSection';
import FAQSection from '../components/FAQSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <>
      <Head>
        <title>malekapp - منصة التطبيقات الذكية</title>
        <meta name="description" content="أنشئ تطبيقات احترافية بدون كتابة كود" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen bg-white">
        <Header />
        <HeroSection />
        <FeaturesSection />
        <WorkspaceSection />
        <PricingSection />
        <DashboardSection />
        <TeamSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
        
        {/* Footer */}
        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
              <div>
                <div className="flex items-center space-x-3 space-x-reverse mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-orange-500 rounded-full flex items-center justify-center">
                    <span className="text-white font-bold">M</span>
                  </div>
                  <span className="text-2xl font-bold">malekapp</span>
                </div>
                <p className="text-gray-400">
                  منصة رائدة لبناء التطبيقات بدون برمجة. حول أفكارك إلى واقع.
                </p>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">روابط سريعة</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#features" className="hover:text-white transition duration-300">الميزات</a></li>
                  <li><a href="#pricing" className="hover:text-white transition duration-300">التسعير</a></li>
                  <li><a href="#team" className="hover:text-white transition duration-300">فريقنا</a></li>
                  <li><a href="#faq" className="hover:text-white transition duration-300">الأسئلة الشائعة</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">الدعم</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#contact" className="hover:text-white transition duration-300">اتصل بنا</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">الوثائق</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">الدروس</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">المساعدة</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-lg mb-4">القوانين</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition duration-300">الشروط والأحكام</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">سياسة الخصوصية</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">سياسة الاستخدام</a></li>
                  <li><a href="#" className="hover:text-white transition duration-300">التراخيص</a></li>
                </ul>
              </div>
            </div>
            
            <div className="border-t border-gray-700 pt-8 text-center">
              <p className="text-lg">
                جميع الحقوق محفوظة © {new Date().getFullYear()} عين الكترونية التقنية
              </p>
              <div className="mt-4 flex justify-center space-x-6 space-x-reverse text-gray-400">
                <a href="#" className="hover:text-white transition duration-300">تويتر</a>
                <a href="#" className="hover:text-white transition duration-300">لينكدإن</a>
                <a href="#" className="hover:text-white transition duration-300">فيسبوك</a>
                <a href="#" className="hover:text-white transition duration-300">يوتيوب</a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </>
  );
}

export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
    },
  };
}