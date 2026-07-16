"use client";

import { useEffect, useMemo, useState } from "react";
import Image from "next/image";
import {
  Baby,
  Building2,
  Footprints,
  Glasses,
  Landmark,
  Mountain,
  PanelsTopLeft,
  Store,
  Target,
  UtensilsCrossed,
  type LucideIcon,
} from "lucide-react";

type Hotspot = {
  x: number;
  y: number;
};

type Place = {
  id: number;
  title: string;
  icon: LucideIcon;
  image: string;
  imageAlt: string;
  intro: string;
  sections: Array<{ label: string; text: string }>;
  hotspots: Hotspot[];
  gallery?: string[];
};

const places: Place[] = [
  {
    id: 1,
    title: "مركز الزوار",
    icon: Building2,
    image: "/SSH/assets/visitor-center.png",
    imageAlt: "تصور معماري لمركز الزوار",
    intro:
      "وجهة معرفية مفتوحة تأخذ الزائر في رحلة تفاعلية للتعرّف على أحداث غزوة أُحد وقيمها الخالدة، ضمن تجربة تجمع بين التاريخ والتصميم والمحتوى البصري.",
    sections: [
      {
        label: "نبذة عن مركز الزوار",
        text: "مركز مفتوح صُمم ليقدم محتوى تاريخيًا ومعرفيًا بأسلوب حديث مستوحى من أحداث غزوة أُحد.",
      },
      {
        label: "الرحلة والتجربة",
        text: "رحلة متسلسلة تتيح للزائر اكتشاف أحداث الغزوة وقيمها تدريجيًا ضمن تجربة مكانية مؤثرة.",
      },
      {
        label: "القيم",
        text: "تستحضر القيم والمعاني الإنسانية المستلهمة من أحداث غزوة أُحد، وتعزز ارتباط الزائر بأثرها.",
      },
    ],
    hotspots: [{ x: 37.1, y: 54.6 }],
  },
  {
    id: 2,
    title: "جبل الرماة",
    icon: Mountain,
    image: "/SSH/assets/archers-hill.png",
    imageAlt: "تصور تطوير تجربة جبل الرماة",
    intro:
      "معلم تاريخي بارز يأخذ الزائر في رحلة معرفية تستحضر أحداث غزوة أُحد وقيمة المكان وأثره الممتد.",
    sections: [
      {
        label: "نبذة عن جبل الرماة",
        text: "وجهة تاريخية وثقافية تعكس مكانة جبل الرماة، وتأخذ الزائر في رحلة معرفية تستعرض أحداث غزوة أُحد بأسلوب تفاعلي.",
      },
      {
        label: "الرحلة والتجربة",
        text: "رحلة بصحبة الرواة تبدأ بالضيافة السعودية واستلام العصا والمظلة، مرورًا بالاستكشاف التاريخي وصعود الجبل ومنطقة التلسكوب، وصولًا إلى القيم والعبر.",
      },
      {
        label: "معلومات الزيارة",
        text: "يستقبل جبل الرماة الأفراد والمجموعات على مدار 24 ساعة.",
      },
    ],
    hotspots: [{ x: 63.9, y: 56.7 }],
  },
  {
    id: 3,
    title: "المتحف والمعرض التفاعلي",
    icon: Landmark,
    image: "/SSH/assets/interactive-museum.png",
    imageAlt: "تصور معماري للمتحف والمعرض التفاعلي",
    intro:
      "وجهة ثقافية تأخذ الزائر في رحلة عبر أحداث غزوة أُحد، وتربطه بإرث المكان من خلال سرد قصصي وتجارب بصرية وحسية تفاعلية تجمع بين أصالة التاريخ والابتكار المعاصر.",
    sections: [
      {
        label: "نبذة عن المتحف",
        text: "وجهة ثقافية تفاعلية تربط الزائر بإرث أُحد، وتقدم أحداثه بأسلوب معرفي معاصر.",
      },
      {
        label: "الرحلة والتجربة",
        text: "مشاهد بانورامية ومؤثرات بصرية وصوتية تضع الزائر في قلب الأحداث وتُحيي تفاصيلها.",
      },
      {
        label: "معلومات الزيارة",
        text: "مواعيد الزيارة والتذاكر وخدمات النقل الترددي من مواقف الميدان — تُحدَّث لاحقًا.",
      },
    ],
    hotspots: [{ x: 40.2, y: 44.6 }],
  },
  {
    id: 4,
    title: "تجربة الواقع الافتراضي",
    icon: Glasses,
    image: "/SSH/assets/vr-experience.png",
    imageAlt: "تصور مبنى تجربة الواقع الافتراضي",
    intro:
      "تجربة ثقافية تنقل الزائر عبر الزمن لاستكشاف أحداث غزوة أُحد ومعايشة تفاصيلها، باستخدام تقنيات الواقع الافتراضي التي تجمع بين المعرفة والتفاعل بأسلوب مبتكر.",
    sections: [
      {
        label: "نبذة عن التجربة",
        text: "تجربة افتراضية تفاعلية تستحضر أحداث غزوة أُحد، وتربط الزائر بتاريخ المكان بأسلوب معاصر.",
      },
      {
        label: "قاعة التجربة",
        text: "بيئة افتراضية غامرة تنقل الزائر عبر مشاهد تفاعلية لاستكشاف أحداث غزوة أُحد ومعايشة تفاصيلها.",
      },
      {
        label: "معلومات الزيارة",
        text: "مواعيد الزيارة والتذاكر — تُحدَّث لاحقًا.",
      },
    ],
    hotspots: [{ x: 47.1, y: 45 }],
  },
  {
    id: 5,
    title: "تجربة الرماية",
    icon: Target,
    image: "/SSH/assets/archery-experience.png",
    imageAlt: "واجهة تجربة الرماية",
    intro:
      "تجربة تفاعلية مستوحاة من ارتباط الرماية بأحداث غزوة أُحد، تتيح للزائر خوض تحدٍ يجمع بين التركيز والدقة ضمن بيئة آمنة ومهيأة لمختلف الفئات.",
    sections: [
      {
        label: "الارتباط التاريخي",
        text: "تستمد التجربة فكرتها من حضور الرماية في أحداث غزوة أُحد وارتباطها بتاريخ الموقع.",
      },
      {
        label: "تجربة الرماية",
        text: "تجربة عملية تبدأ بالتدريب والإرشاد، وتتيح اختبار مهارات التركيز والدقة ضمن تحديات تفاعلية.",
      },
      {
        label: "الفئات المستهدفة",
        text: "تجربة مصممة لمختلف الفئات، وتجمع بين التعلم والممارسة والتحدي في بيئة آمنة.",
      },
    ],
    hotspots: [{ x: 32.1, y: 48.3 }],
  },
  {
    id: 6,
    title: "منطقة الطفل",
    icon: Baby,
    image: "/SSH/assets/children-zone.png",
    imageAlt: "تصور منطقة الطفل التعليمية والترفيهية",
    intro:
      "تجربة تعليمية وترفيهية متكاملة تحول الطفل من زائر إلى مستكشف؛ يعيش رحلة مليئة بالتعلم واللعب والاكتشاف، ويتعرف على تاريخ المكان بأسلوب تفاعلي يناسب عمره ويصنع تجربة تبقى في ذاكرته.",
    sections: [
      {
        label: "نبذة عن المنطقة",
        text: "وجهة تفاعلية تجمع التعلم واللعب، وتتيح للأطفال اكتشاف تاريخ المكان بأسلوب ممتع وملهم.",
      },
      {
        label: "رحلة المستكشف",
        text: "رحلة متسلسلة عبر محطات تفاعلية، يعيش خلالها الطفل تجارب تعليمية وعملية تنتهي بالإنجاز.",
      },
      {
        label: "معلومات الزيارة",
        text: "مواعيد الزيارة والتذاكر — تُحدَّث لاحقًا.",
      },
    ],
    hotspots: [{ x: 69, y: 19.7 }],
  },
  {
    id: 7,
    title: "السوق الشعبي",
    icon: Store,
    image: "/SSH/assets/traditional-market.png",
    imageAlt: "تصور السوق الشعبي",
    intro:
      "وجهة ثقافية وتجارية تجمع تنوع الثقافات والمنتجات في أجواء مستوحاة من الأسواق الشعبية، وتتيح للزائر اكتشاف المنتجات المحلية والعالمية والحرف والهدايا، مع إبراز هوية المدينة المنورة وموروثها بأسلوب أصيل ومعاصر.",
    sections: [
      {
        label: "نبذة عن السوق",
        text: "مساحة حيوية تجمع ثقافات متنوعة، وتبرز هوية المدينة المنورة وموروثها المحلي بأسلوب معاصر.",
      },
      {
        label: "تنوع المنتجات",
        text: "منتجات مدينية وعالمية، وحرف يدوية، وهدايا تعكس تنوع الثقافات.",
      },
      {
        label: "التجربة والرحلة",
        text: "تجربة تجمع التسوق والاكتشاف، وتتيح للزائر اقتناء قطعة تذكارية تحمل أثرًا من رحلته.",
      },
    ],
    hotspots: [{ x: 53.5, y: 13.5 }],
  },
  {
    id: 8,
    title: "الأكشاك التجارية",
    icon: PanelsTopLeft,
    image: "/SSH/assets/commercial-kiosks.png",
    imageAlt: "تصور الأكشاك التجارية",
    intro:
      "مساحات تجارية متنوعة تستقطب العلامات التجارية والأسر المنتجة من أهل المنطقة، لتقديم منتجات وخدمات تلبي احتياجات الزوار، وتسهم في دعم المشاريع المحلية وإثراء التجربة التجارية في ميدان سيد الشهداء.",
    sections: [
      {
        label: "نبذة عن المنطقة",
        text: "مساحات تجارية تضم علامات متنوعة وأسرًا منتجة، وتقدم خيارات تلبي احتياجات زوار الميدان.",
      },
      {
        label: "التنوع التجاري",
        text: "فرص تجارية تمكّن أهل المنطقة والعلامات التجارية من تقديم منتجات وخدمات متنوعة ضمن تجربة متجددة.",
      },
      {
        label: "الأكشاك",
        text: "تضم المنطقة أكثر من 30 كشكًا توفر منتجات وخدمات متنوعة من العلامات التجارية.",
      },
    ],
    hotspots: [
      { x: 70.6, y: 50.6 },
      { x: 47.9, y: 54.3 },
    ],
  },
  {
    id: 9,
    title: "منطقة المطاعم والمقاهي",
    icon: UtensilsCrossed,
    image: "/SSH/assets/restaurants-cafes.png",
    imageAlt: "تصور إحدى مناطق المطاعم والمقاهي",
    gallery: ["/SSH/assets/restaurants-cafes-alt.png"],
    intro:
      "وجهة جذب متكاملة تضم مطاعم ومقاهي متنوعة موزعة في مناطق ميدان سيد الشهداء، وتوفر جلسات مميزة بإطلالات على الوادي وجبل أُحد، وسط مناظر طبيعية تمنح الزائر تجربة ضيافة واستراحة تثري رحلته في الميدان.",
    sections: [
      {
        label: "نبذة عن المنطقة",
        text: "وجهات متنوعة للمطاعم والمقاهي، تجمع خيارات الضيافة والجلسات المميزة ضمن أجواء طبيعية جاذبة.",
      },
      {
        label: "الإطلالات والجلسات",
        text: "جلسات بإطلالات على الوادي وجبل أُحد، تمنح الزائر تجربة مميزة وسط المناظر الطبيعية.",
      },
      {
        label: "مكونات المنطقة",
        text: "تضم أربع مناطق مستهدفة للمطاعم والمقاهي، موزعة لتشكل وجهات جذب في أنحاء الميدان.",
      },
    ],
    hotspots: [
      { x: 23.3, y: 54.9 },
      { x: 34.9, y: 31.1 },
      { x: 82.7, y: 56.7 },
      { x: 54.4, y: 66.7 },
    ],
  },
  {
    id: 10,
    title: "مسار المشاة المظلل",
    icon: Footprints,
    image: "/SSH/assets/shaded-walkway.png",
    imageAlt: "تصور مسار المشاة المظلل وتجربته الحسية",
    intro:
      "مسار مظلل يجمع بين المناطق المستهدف تطويرها، ويسهّل على الزوار رحلتهم ويثريها سمعيًا وبصريًا، مع نظام روائح ذكي يمنح كل منطقة رائحة مميزة.",
    sections: [
      {
        label: "تجربة متكاملة",
        text: "مسار مريح يربط وجهات الميدان ويقدم تجربة حسية تجمع الظلال والمشهد البصري والمحتوى الصوتي والروائح المميزة.",
      },
      {
        label: "سهولة التنقل",
        text: "يوفر المسار رحلة أوضح وأكثر راحة بين المناطق المستهدف تطويرها في الميدان.",
      },
    ],
    hotspots: [],
  },
];

const walkwayRoutes = [
  "M 40.4 21.2 C 42 21.7, 43.2 21.6, 44.7 21.5 L 44.7 15.2 C 44.7 13.7, 45.7 13.2, 47.2 13 C 51.5 12.2, 56.2 12.5, 59.8 13 C 61.1 13.3, 61.3 14.4, 61.8 16 C 62.4 18.4, 63.5 20.3, 66 21.3",
  "M 44.7 15.2 L 44.7 35.3 C 44.3 36.6, 44.1 38.3, 44.7 40.1 C 45.2 41.3, 46.2 41.5, 47.8 41.5 L 58.2 41.5 C 61.3 42, 63.5 44.5, 66.2 46.2 C 69.6 47.8, 73.1 48.8, 76.2 50.3 C 77.2 50.8, 77.5 52, 77 53.2 C 76 54.2, 74.5 55, 72.8 55.8",
  "M 41 45.7 C 43.4 45.7, 45 45.5, 45.4 47.3 C 45.9 49.2, 45.7 53, 46.1 56",
  "M 40.8 45.7 C 38.5 46.8, 36.5 49.4, 34.4 50.6 C 31.4 52.1, 28.6 53.1, 26.3 55 C 25.7 55.4, 25.1 56, 24.8 56.6",
  "M 37.5 58.7 C 37.2 61.6, 37.5 64.5, 39.7 66.5 C 41.5 68.1, 43.6 69, 45.7 70.4 C 48 72, 49.3 74.8, 49.5 78 L 49.6 89.5",
];

export default function Home() {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [zoom, setZoom] = useState(1);

  const activePlace = useMemo(
    () => places.find((place) => place.id === activeId) ?? null,
    [activeId],
  );
  const ActiveIcon = activePlace?.icon;

  const navigate = (direction: 1 | -1) => {
    if (activeId === null) return;
    const currentIndex = places.findIndex((place) => place.id === activeId);
    const nextIndex = (currentIndex + direction + places.length) % places.length;
    setActiveId(places[nextIndex].id);
  };

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setActiveId(null);
      if (event.key === "ArrowLeft" && activeId !== null) navigate(1);
      if (event.key === "ArrowRight" && activeId !== null) navigate(-1);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  });

  return (
    <main className="map-app" dir="rtl">
      <header className="topbar">
        <div className="brand">
          <div className="brand-mark">
            <Image
              src="/SSH/assets/elm-logo.svg"
              alt="علم"
              width={825}
              height={325}
              priority
              unoptimized
            />
          </div>
          <div>
            <p className="eyebrow">المخطط التفاعلي</p>
            <h1>ميدان سيد الشهداء</h1>
          </div>
        </div>

        <div className="instruction" aria-live="polite">
          <span className="instruction-dot" />
          اضغط على إحدى النقاط لاستكشاف تفاصيلها
        </div>

        <div className="zoom-controls" aria-label="التحكم بحجم الخريطة">
          <button
            type="button"
            aria-label="تصغير الخريطة"
            onClick={() => setZoom((value) => Math.max(0.9, value - 0.1))}
            disabled={zoom <= 0.9}
          >
            −
          </button>
          <span>{Math.round(zoom * 100)}٪</span>
          <button
            type="button"
            aria-label="تكبير الخريطة"
            onClick={() => setZoom((value) => Math.min(1.3, value + 0.1))}
            disabled={zoom >= 1.3}
          >
            +
          </button>
        </div>
      </header>

      <section className="map-viewport" aria-label="الخريطة التفاعلية للميدان">
        <div
          className="map-frame"
          style={{ transform: `scale(${zoom})` }}
        >
          <Image
            className="master-map"
            src="/SSH/assets/master-map.png"
            alt="المخطط العام لميدان سيد الشهداء"
            width={1415}
            height={1112}
            priority
            unoptimized
            draggable={false}
          />

          <svg
            className="walkway-route"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            aria-label="مسار المشاة المظلل الرابط بين عناصر المخطط"
          >
            <g
              className={`walkway-network ${activeId === 10 ? "is-active" : ""}`}
              role="button"
              tabIndex={0}
              onClick={() => setActiveId(10)}
              onKeyDown={(event) => {
                if (event.key === "Enter" || event.key === " ") {
                  event.preventDefault();
                  setActiveId(10);
                }
              }}
            >
              <title>اضغط لعرض معلومات مسار المشاة المظلل</title>
              {walkwayRoutes.map((route) => (
                <path className="route-hit" d={route} key={`hit-${route}`} />
              ))}
              {walkwayRoutes.map((route) => (
                <path className="route-shadow" d={route} key={`shadow-${route}`} />
              ))}
              {walkwayRoutes.map((route) => (
                <path className="route-line" d={route} key={`line-${route}`} />
              ))}
              {walkwayRoutes.map((route) => (
                <path className="route-flow" d={route} key={`flow-${route}`} />
              ))}
            </g>
          </svg>

          {places.flatMap((place) => {
            const PlaceIcon = place.icon;
            return place.hotspots.map((hotspot, hotspotIndex) => (
              <button
                className={`hotspot ${activeId === place.id ? "is-active" : ""}`}
                key={`${place.id}-${hotspotIndex}`}
                style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
                type="button"
                aria-label={`عرض معلومات ${place.title}`}
                title={place.title}
                onClick={() => setActiveId(place.id)}
              >
                <span className="pulse" aria-hidden="true" />
                <span className="hotspot-icon" aria-hidden="true">
                  <PlaceIcon size={17} strokeWidth={2.2} />
                </span>
                <span className="hotspot-label">{place.title}</span>
              </button>
            ));
          })}
        </div>
      </section>

      <nav className="places-strip" aria-label="دليل عناصر المخطط">
        <div className="strip-scroll">
          {places.map((place) => {
            const PlaceIcon = place.icon;
            return (
              <button
                type="button"
                key={place.id}
                className={activeId === place.id ? "is-active" : ""}
                onClick={() => setActiveId(place.id)}
              >
                <span aria-hidden="true">
                  {place.id === 10 ? (
                    <svg className="route-key" viewBox="0 0 24 12">
                      <path d="M 2 9 C 6 2, 12 10, 22 3" />
                    </svg>
                  ) : (
                    <PlaceIcon size={15} strokeWidth={2} />
                  )}
                </span>
                {place.title}
              </button>
            );
          })}
        </div>
      </nav>

      {activePlace && (
        <div
          className="details-layer"
          role="presentation"
          onMouseDown={(event) => {
            if (event.currentTarget === event.target) setActiveId(null);
          }}
        >
          <article
            className="details-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="place-title"
          >
            <div className="panel-toolbar">
              <div className="panel-count">
                {activePlace.id === 10 ? (
                  <svg className="route-key panel-route-key" viewBox="0 0 24 12" aria-hidden="true">
                    <path d="M 2 9 C 6 2, 12 10, 22 3" />
                  </svg>
                ) : ActiveIcon && (
                  <ActiveIcon size={24} strokeWidth={1.8} aria-hidden="true" />
                )}
                <span>عنصر تفاعلي</span>
              </div>
              <button
                type="button"
                className="close-button"
                aria-label="إغلاق التفاصيل"
                onClick={() => setActiveId(null)}
              >
                ×
              </button>
            </div>

            <div className="place-visual">
              <Image
                src={activePlace.image}
                alt={activePlace.imageAlt}
                width={1536}
                height={1122}
                unoptimized
              />
              <span className="visual-tag">تصور مبدئي</span>
            </div>

            <div className="place-content">
              <p className="place-kicker">ميدان سيد الشهداء</p>
              <h2 id="place-title">{activePlace.title}</h2>
              <p className="place-intro">{activePlace.intro}</p>

              {activePlace.gallery?.map((image, index) => (
                <div className="gallery-image" key={image}>
                  <Image
                    src={image}
                    alt={`تصور إضافي لـ ${activePlace.title} ${index + 1}`}
                    width={1402}
                    height={1122}
                    unoptimized
                  />
                </div>
              ))}

              <div className="detail-sections">
                {activePlace.sections.map((section) => (
                  <section key={section.label}>
                    <h3>{section.label}</h3>
                    <p>{section.text}</p>
                  </section>
                ))}
              </div>
            </div>

            <footer className="panel-footer">
              <button type="button" onClick={() => navigate(-1)}>
                <span aria-hidden="true">→</span>
                السابق
              </button>
              <span className="footer-progress" aria-hidden="true">
                {places.map((place) => (
                  <i
                    key={place.id}
                    className={place.id === activePlace.id ? "is-active" : ""}
                  />
                ))}
              </span>
              <button type="button" onClick={() => navigate(1)}>
                التالي
                <span aria-hidden="true">←</span>
              </button>
            </footer>
          </article>
        </div>
      )}
    </main>
  );
}
