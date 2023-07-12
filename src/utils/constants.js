import Watch from "../assets/images/watch.svg";
import Shield from "../assets/images/shield.svg";
import Lens from "../assets/images/lens.svg";

const ADVERTBLOCK = [
  {
    id: 0,
    icon: Watch,
    text: "Высокая и оперативная скорость обработки заявки",
  },
  {
    id: 1,
    icon: Lens,
    text: "Огромная комплексная база данных, обеспечивающая объективный ответ на запрос",
  },
  {
    id: 2,
    icon: Shield,
    text: "Защита конфиденциальных сведений, не подлежащих разглашению по федеральному законодательству",
  },
];

const BASE_URL = "https://gateway.scan-interfax.ru/";
const LOGIN_URL = "api/v1/account/login";
const LOGIN_INFO_URL = "api/v1/account/info";
const GENERAL_DATA_URL = "api/v1/objectsearch/histograms";
const DATA_URL = "api/v1/objectsearch";
const DATA_DETAILS_URL = "/api/v1/documents";

export {
  ADVERTBLOCK,
  BASE_URL,
  LOGIN_URL,
  LOGIN_INFO_URL,
  GENERAL_DATA_URL,
  DATA_URL,
  DATA_DETAILS_URL,
};