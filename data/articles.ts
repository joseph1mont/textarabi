import { Article } from "./types";

// Arabic Imports
import fixPhotoshopArabicTextAr from "./articles/ar/fix-photoshop-arabic-text.json";
import seoStripDiacriticsAr from "./articles/ar/seo-strip-diacritics.json";
import instantTranslateLocalizationAr from "./articles/ar/instant-translate-localization.json";
import tashkeelKeypadGuideAr from "./articles/ar/tashkeel-keypad-guide.json";
import uiFontPreviewGuideAr from "./articles/ar/ui-font-preview-guide.json";
import fixPremiereIllustratorArabicAr from "./articles/ar/fix-premiere-illustrator-arabic.json";
import cleanArabicDatabaseSqlAr from "./articles/ar/clean-arabic-database-sql.json";
import translateEcommerceDropshippingAr from "./articles/ar/translate-ecommerce-dropshipping.json";
import tashkeelAcademicTextsAr from "./articles/ar/tashkeel-academic-texts.json";
import optimizeBounceRateRtlAr from "./articles/ar/optimize-bounce-rate-rtl.json";
import comprehensiveTashkeelAr from "./articles/ar/comprehensive-tashkeel-guide.json";
import fixDisconnectedLettersAr from "./articles/ar/fix-disconnected-letters.json";
import formingArabicDiacriticsCorporateLettersAr from "./articles/ar/forming-arabic-diacritics-corporate-letters.json";
import accurateTashkeelEbooksNovelsAr from "./articles/ar/accurate-tashkeel-ebooks-novels.json";
import formingArabicTextSaudiVision2030Ar from "./articles/ar/forming-arabic-text-saudi-vision-2030.json";
import howToUseArabicNlpToolsAcademicResearchAr from "./articles/ar/how-to-use-arabic-nlp-tools-academic-research.json";
import optimizingArabicContentSeoDiacritizationAr from "./articles/ar/optimizing-arabic-content-seo-diacritization.json";
import wordpressArabicRtlFixAr from "./articles/ar/wordpress-arabic-rtl-fix.json";
import handlingArabicReshapingInWebCanvasElementsAr from "./articles/ar/handling-arabic-reshaping-in-web-canvas-elements.json";

// English Imports
import fixPhotoshopArabicTextEn from "./articles/en/fix-photoshop-arabic-text.json";
import seoStripDiacriticsEn from "./articles/en/seo-strip-diacritics.json";
import instantTranslateLocalizationEn from "./articles/en/instant-translate-localization.json";
import tashkeelKeypadGuideEn from "./articles/en/tashkeel-keypad-guide.json";
import uiFontPreviewGuideEn from "./articles/en/ui-font-preview-guide.json";
import fixPremiereIllustratorArabicEn from "./articles/en/fix-premiere-illustrator-arabic.json";
import cleanArabicDatabaseSqlEn from "./articles/en/clean-arabic-database-sql.json";
import translateEcommerceDropshippingEn from "./articles/en/translate-ecommerce-dropshipping.json";
import tashkeelAcademicTextsEn from "./articles/en/tashkeel-academic-texts.json";
import optimizeBounceRateRtlEn from "./articles/en/optimize-bounce-rate-rtl.json";
import comprehensiveTashkeelEn from "./articles/en/comprehensive-tashkeel-guide.json";
import fixDisconnectedLettersEn from "./articles/en/fix-disconnected-letters.json";
import formingArabicDiacriticsCorporateLettersEn from "./articles/en/forming-arabic-diacritics-corporate-letters.json";
import accurateTashkeelEbooksNovelsEn from "./articles/en/accurate-tashkeel-ebooks-novels.json";
import formingArabicTextSaudiVision2030En from "./articles/en/forming-arabic-text-saudi-vision-2030.json";
import howToUseArabicNlpToolsAcademicResearchEn from "./articles/en/how-to-use-arabic-nlp-tools-academic-research.json";
import optimizingArabicContentSeoDiacritizationEn from "./articles/en/optimizing-arabic-content-seo-diacritization.json";
import wordpressArabicRtlFixEn from "./articles/en/wordpress-arabic-rtl-fix.json";
import handlingArabicReshapingInWebCanvasElementsEn from "./articles/en/handling-arabic-reshaping-in-web-canvas-elements.json";

const rawArticles: Article[] = [
  // Arabic Articles
  fixPhotoshopArabicTextAr,
  seoStripDiacriticsAr,
  instantTranslateLocalizationAr,
  tashkeelKeypadGuideAr,
  uiFontPreviewGuideAr,
  fixPremiereIllustratorArabicAr,
  cleanArabicDatabaseSqlAr,
  translateEcommerceDropshippingAr,
  tashkeelAcademicTextsAr,
  optimizeBounceRateRtlAr,
  comprehensiveTashkeelAr,
  fixDisconnectedLettersAr,
  formingArabicDiacriticsCorporateLettersAr,
  accurateTashkeelEbooksNovelsAr,
  formingArabicTextSaudiVision2030Ar,
  howToUseArabicNlpToolsAcademicResearchAr,
  optimizingArabicContentSeoDiacritizationAr,
  wordpressArabicRtlFixAr,
  handlingArabicReshapingInWebCanvasElementsAr,

  // English Articles
  fixPhotoshopArabicTextEn,
  seoStripDiacriticsEn,
  instantTranslateLocalizationEn,
  tashkeelKeypadGuideEn,
  uiFontPreviewGuideEn,
  fixPremiereIllustratorArabicEn,
  cleanArabicDatabaseSqlEn,
  translateEcommerceDropshippingEn,
  tashkeelAcademicTextsEn,
  optimizeBounceRateRtlEn,
  comprehensiveTashkeelEn,
  fixDisconnectedLettersEn,
  formingArabicDiacriticsCorporateLettersEn,
  accurateTashkeelEbooksNovelsEn,
  formingArabicTextSaudiVision2030En,
  howToUseArabicNlpToolsAcademicResearchEn,
  optimizingArabicContentSeoDiacritizationEn,
  wordpressArabicRtlFixEn,
  handlingArabicReshapingInWebCanvasElementsEn,
];

// Sort from newer (descending date) to older
export const articles: Article[] = [...rawArticles].sort((a, b) => {
  return new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime();
});
