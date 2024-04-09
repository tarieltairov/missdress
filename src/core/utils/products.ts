import slimJeans from "../../assets/products/jeans/image 242.svg";
import BenitoDress from "../../assets/products/dresses/dress.svg";
import SkirtMaski from "../../assets/products/skirt/skirtmaski.svg";
import Skinny from "../../assets/products/jeans/skinny.svg";
import Dress from "../../assets/products/dresses/dress2.svg";
import miniSkirt from "../../assets/products/skirt/skirt2.svg";
import jeans405 from "../../assets/products/jeans/jeans405.svg";
import midi from "../../assets/products/dresses/midi.svg";
import skirtJeans from "../../assets/products/skirt/skirtJeans.svg";
import elastik from "../../assets/products/jeans/elastik.svg";
import blackMidiDress from "../../assets/products/dresses/blackMidi.svg";
import kargoSkirt from "../../assets/products/skirt/kargo.svg";
import jeans11 from "../../assets/products/secondaryImages/jeans/SLIM FIT2.1.jpg";
import jeans12 from "../../assets/products/secondaryImages/jeans/SLIM FIT2.2.jpg";
import jeans13 from "../../assets/products/secondaryImages/jeans/SLIM FIT2.3.jpg";
import jeans14 from "../../assets/products/secondaryImages/jeans/SLIM FIT2.4.jpg";
import jeans21 from "../../assets/products/secondaryImages/jeans/SKINNY FIT1.1.jpg";
import jeans22 from "../../assets/products/secondaryImages/jeans/SKINNY FIT1.2.jpg";
import jeans23 from "../../assets/products/secondaryImages/jeans/SKINNY FIT1.3.jpg";
import jeans24 from "../../assets/products/secondaryImages/jeans/SKINNY FIT1.4.jpg";
import jeans31 from "../../assets/products/secondaryImages/jeans/СULOTTES 3.1.jpg";
import jeans32 from "../../assets/products/secondaryImages/jeans/СULOTTES 3.2.jpg";
import jeans33 from "../../assets/products/secondaryImages/jeans/СULOTTES 3.3.jpg";
import jeans34 from "../../assets/products/secondaryImages/jeans/СULOTTES 3.4.jpg";
import jeans41 from "../../assets/products/secondaryImages/jeans/Wide Leg 4.1.jpg";
import jeans42 from "../../assets/products/secondaryImages/jeans/Wide Leg 4.2.jpg";
import jeans43 from "../../assets/products/secondaryImages/jeans/Wide Leg 4.3.jpg";
import jeans44 from "../../assets/products/secondaryImages/jeans/Wide Leg 4.4.jpg";
import dress11 from "../../assets/products/secondaryImages/dress/Benito Kate Wrap Dress 1.1.png";
import dress12 from "../../assets/products/secondaryImages/dress/Benito Kate Wrap Dress 1.2.png";
import dress13 from "../../assets/products/secondaryImages/dress/Benito Kate Wrap Dress 1.3.png";
import dress14 from "../../assets/products/secondaryImages/dress/Benito Kate Wrap Dress 1.4.png";
import dress21 from "../../assets/products/secondaryImages/dress/dress2.1.jpg";
import dress22 from "../../assets/products/secondaryImages/dress/dress2.jpg";
import dress23 from "../../assets/products/secondaryImages/dress/dress2.3.jpg";
import dress24 from "../../assets/products/secondaryImages/dress/dress2.4.jpg";
import dress31 from "../../assets/products/secondaryImages/dress/dress3.1.jpg";
import dress32 from "../../assets/products/secondaryImages/dress/dress3.2.jpg";
import dress33 from "../../assets/products/secondaryImages/dress/dress3.3.jpg";
import dress34 from "../../assets/products/secondaryImages/dress/dress3.4.jpg";
import dress41 from "../../assets/products/secondaryImages/dress/dress4.1.jpg";
import dress42 from "../../assets/products/secondaryImages/dress/dress4.2.jpg";
import dress43 from "../../assets/products/secondaryImages/dress/dress4.3.jpg";
import dress44 from "../../assets/products/secondaryImages/dress/dress4.4.jpg";
import skirts11 from "../../assets/products/secondaryImages/skirts/skirts1.1.jpg";
import skirts12 from "../../assets/products/secondaryImages/skirts/skirts1.2.jpg";
import skirts13 from "../../assets/products/secondaryImages/skirts/skirts1.3.jpg";
import skirts14 from "../../assets/products/secondaryImages/skirts/skirts1.4.jpg";
import skirts21 from "../../assets/products/secondaryImages/skirts/skirt2.1.jpg";
import skirts22 from "../../assets/products/secondaryImages/skirts/skirt2.2.jpg";
import skirts23 from "../../assets/products/secondaryImages/skirts/skirt2.3.jpg";
import skirts24 from "../../assets/products/secondaryImages/skirts/skirt2.4.jpg";
import skirts31 from "../../assets/products/secondaryImages/skirts/skirt3.1.jpg";
import skirts32 from "../../assets/products/secondaryImages/skirts/skirt3.2.jpg";
import skirts33 from "../../assets/products/secondaryImages/skirts/skirt3.3.jpg";
import skirts34 from "../../assets/products/secondaryImages/skirts/skirt3.4.jpg";
import skirts41 from "../../assets/products/secondaryImages/skirts/skirt4.1.jpg";
import skirts42 from "../../assets/products/secondaryImages/skirts/skirt4.2.jpg";
import skirts43 from "../../assets/products/secondaryImages/skirts/skirt4.3.jpg";
import skirts44 from "../../assets/products/secondaryImages/skirts/skirt4.4.jpg";

export type ProductsTypes = {
  dress: string;
  jeans: string;
  skirt: string;
};

export const productsTypes: ProductsTypes = {
  dress: "Платья",
  jeans: "Джинсы",
  skirt: "Юбки",
};

export interface IProduct {
  id: number;
  title: string;
  vendorCode: string;
  numberInline: number;
  price: number;
  oldPrice: number;
  size: string;
  length: number;
  textile: string;
  style: string;
  desc: string;
  image: string;
  images: string[];
  rate: number;
  type: string;
}

export const products: IProduct[] = [
  {
    id: 1,
    title: "Джинсы 426 SLIM FIT с разрезами",
    vendorCode: "4801011426",
    numberInline: 5,
    price: 2599,
    oldPrice: 4500,
    size: "S",
    length: 60,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "- Модель с высокой посадкой на талии и естественным облеганием\n - Качественный деним из натурального хлопка с добавлением эластана для максимального комфорта\n- Классическая застежка на молнию и пуговицу, шлевки для ремня, пять карманов\n- Необработанный край снизу и разрезы по шаговым швам добавят образу винтажную нотку\n\nХочешь расслабленный базовый аутфит? Дополни футболками Mira или Mary.Хочешь подчеркнуть силуэт? Выбери приталенную футболку Kira.",
    image: slimJeans,
    images: [jeans11, jeans12, jeans13, jeans14],
    rate: 3,
    type: productsTypes.jeans,
  },
  {
    id: 2,
    title: "Benito Kate Wrap Dress",
    vendorCode: "Платья AD857",
    numberInline: 5,
    price: 5990,
    oldPrice: 7500,
    size: "29-49",
    length: 115,
    textile: "Полиэстер",
    style: "А-Силуэт",
    desc: "В наши дни платья по-прежнему пользуются спросом и популярностью среди молодежи, они занимают почетные места на презентациях мод.\nОднако постепенно в моду входит повседневный стиль, который не подразумевает использование красочных и ярких образов.\nПлатье Benito Kate Wrap Dress отличный пример этому.",
    image: BenitoDress,
    images: [
      dress11,
      dress12,
      dress13,
      dress14,
      dress11,
      dress12,
      dress13,
      dress14,
    ],
    rate: 4,
    type: productsTypes.dress,
  },
  {
    id: 3,
    title: "Юбка макси",
    vendorCode: "4804011909",
    numberInline: 5,
    price: 3299,
    oldPrice: 4500,
    size: "S",
    length: 90,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "Юбка макси лаконичного дизайна. Легкая приятная к телу ткань из смесовой вискозы. Трапециевидный крой с высокой посадкой талии и эластичным поясом. Вытачки сзади для актуальной посадки по фигуре.\n\nНа модели представлен размер S Параметры модели: 175/80/60/89",
    image: SkirtMaski,
    images: [
      skirts11,
      skirts12,
      skirts13,
      skirts14,
      skirts11,
      skirts12,
      skirts13,
      skirts14,
    ],
    rate: 2,
    type: productsTypes.skirt,
  },
  {
    id: 4,
    title: "Джинсы 495 SKINNY FIT",
    vendorCode: "4801011495",
    numberInline: 5,
    price: 2999,
    oldPrice: 3500,
    size: "S",
    length: 60,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "- Удобные базовые джинсы, которые не сковывают движения за счет эластичной ткани\n- Классическая модель с пятью карманами, облегающий крой идеально повторяет силуэт фигуры, подчеркивая высокую талию и контуры ног\n- Выполнены из качественного и мягкого стрейч денима\nХочешь расслабленный аутфит с эффектным контрастом низа и верха? Выбери футболку оверсайз Endy.\n\nХочешь максимально подчеркнуть силуэт? Дополни футболкой Kira.",
    image: Skinny,
    images: [
      jeans21,
      jeans22,
      jeans23,
      jeans24,
      jeans21,
      jeans22,
      jeans23,
      jeans24,
    ],
    rate: 2,
    type: productsTypes.jeans,
  },
  {
    id: 5,
    title: "Платье с открытыми плечами",
    vendorCode: "2804010757",
    numberInline: 5,
    price: 2199,
    oldPrice: 4500,
    size: "S",
    length: 90,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "Платье из фактурной ткани с открытыми плечами\n- А-силуэт- Длина мини\n- Вырез горловины на резинке\n- Пышные короткие рукава\n- Эластичные манжеты\n- Однотонный дизайн\n\nНа модели представлен размер S\nРост модели 175 см",
    image: Dress,
    images: [
      dress21,
      dress22,
      dress23,
      dress24,
      dress21,
      dress22,
      dress23,
      dress24,
    ],
    rate: 2,
    type: productsTypes.dress,
  },
  {
    id: 6,
    title: "Юбка мини из экокожи с винтажным эффектом",
    vendorCode: "4802011908",
    numberInline: 5,
    price: 1299,
    oldPrice: 4500,
    size: "S",
    length: 90,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "- Гладкая искусственная кожа с винтажными потертостями \n- Чуть расклешённый книзу силуэт с высокой посадкой талии \n- Застежка на молнию и пуговицу, шлевки для ремня, пять карманов \n\nНа модели представлен размер S \nПараметры модели: 175/81/58/86",
    image: miniSkirt,
    images: [
      skirts21,
      skirts22,
      skirts23,
      skirts24,
      skirts21,
      skirts22,
      skirts23,
      skirts24,
    ],
    rate: 2,
    type: productsTypes.skirt,
  },
  {
    id: 7,
    title: "Джинсы 405 СULOTTES",
    vendorCode: "3809011405",
    numberInline: 5,
    price: 3599,
    oldPrice: 5500,
    size: "S",
    length: 60,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "- Кюлоты на высокой посадке с укороченной длиной штанин, что создает изящный акцент на щиколотках\n- Вместо классических передних карманов — маленькие прорезные кармашки. это разгружает линию талии и подчеркивает стройный женственный силуэт\n- Выполнены из мягкого и ластичного хлопкового денима \n\nХочешь подчеркнуть силуэт? Дополни приталенной футболкой Eva или укороченной Nina. Хочешь более расслабленный аутфит? Носи с заправленной футболкой Mary",
    image: jeans405,
    images: [
      jeans31,
      jeans32,
      jeans33,
      jeans34,
      jeans31,
      jeans32,
      jeans33,
      jeans34,
    ],
    rate: 2,
    type: productsTypes.jeans,
  },
  {
    id: 8,
    title: "Платье миди на тонких бретелях",
    vendorCode: "2807010716",
    numberInline: 5,
    price: 799,
    oldPrice: 1500,
    size: "S",
    length: 60,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "Платье из фактурной эластичной ткани с декоративной сборкой сбоку \n- Облегающий крой\n- Длина миди\n- Треугольный вырез декольте\n- Тонкие бретели крест-накрест на спинке\n- Разрез сбоку - Потайная молния в боковом шве\n\nНа модели представлен размер S\nРост модели 176 см",
    image: midi,
    images: [
      dress31,
      dress32,
      dress33,
      dress34,
      dress31,
      dress32,
      dress33,
      dress34,
    ],
    rate: 2,
    type: productsTypes.dress,
  },
  {
    id: 9,
    title: "Джинсовая юбка макси",
    vendorCode: "4804011919",
    numberInline: 5,
    price: 3799,
    oldPrice: 5500,
    size: "S",
    length: 60,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "Джинсовая юбка макси с длинной застежкой на пуговицы. Плотный хлопковый деним в винтажной стирке с небольшим желтым оттенком. Трапециевидный крой и высокая посадка талии. Пояс со шлевками для ремня, пять карманов. \n\nНа модели размер S\n Параметры модели: 175/80/60/89",
    image: skirtJeans,
    images: [
      skirts31,
      skirts32,
      skirts33,
      skirts34,
      skirts31,
      skirts32,
      skirts33,
      skirts34,
    ],
    rate: 2,
    type: productsTypes.skirt,
  },
  {
    id: 10,
    title: "Эластичные джинсы Wide Leg",
    vendorCode: "4804011455",
    numberInline: 5,
    price: 3799,
    oldPrice: 5550,
    size: "S",
    length: 60,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "Жинсы Wide Leg с высокой посадкой талии. Качественный хлопковый деним с добавлением эластана. Маленькие прорезные кармашки спереди и классические накладные карманы сзади. Пояс со шлевками для ремня, застежка на молнию и пуговицу, свободные брючины полной длины.",
    image: elastik,
    images: [
      jeans41,
      jeans42,
      jeans43,
      jeans44,
      jeans41,
      jeans42,
      jeans43,
      jeans44,
    ],
    rate: 2,
    type: productsTypes.jeans,
  },
  {
    id: 11,
    title: "Платье миди из смесового льна",
    vendorCode: "4805010703",
    numberInline: 5,
    price: 3999,
    oldPrice: 5500,
    size: "S",
    length: 60,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "Платье длины миди из смесового льна. Легкая натуральная ткань с добавлением вискозы. Приталенный крой. Оригинальные двойные тонкие бретели с возможностью регулировки. Застёжка на молнию и крючок на спинке. \n На модели представлен размер S \nПараметры модели: 175/80/60/89",
    image: blackMidiDress,
    images: [
      dress41,
      dress42,
      dress43,
      dress44,
      dress41,
      dress42,
      dress43,
      dress44,
    ],
    rate: 2,
    type: productsTypes.dress,
  },
  {
    id: 12,
    title: "Юбка карго миди из экокожи",
    vendorCode: "4802011911",
    numberInline: 5,
    price: 1999,
    oldPrice: 5500,
    size: "S",
    length: 60,
    textile: "Хлопок",
    style: "А-Силуэт",
    desc: "Юбка карго из экокожи с накладными карманами по бокам \n- Прямой крой, высокая посадка талии, эластичный пояс с кулиской\n- Застежка на молнию и пуговицу, карманы с отрезным бочком и ложные задние карманы\n- Длина миди и шлица сзади\n\nНа модели представлен размер S \nПараметры модели: 174/81/60/88",
    image: kargoSkirt,
    images: [
      skirts41,
      skirts42,
      skirts43,
      skirts44,
      skirts41,
      skirts42,
      skirts43,
      skirts44,
    ],
    rate: 2,
    type: productsTypes.skirt,
  },
];
