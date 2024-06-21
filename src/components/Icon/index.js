import { cn } from "../../lib/utils";
import React from "react";
import Logo from "../../../static/images/icon.png";
import PropTypes from "prop-types";
import Call from "../../../static/assets/phone-rotary.svg";
import Hotel from "../../../static/assets/hotel.svg";
import radio from '../../../static/assets/digital-clock.svg';
import view from '../../../static/assets/view.svg';
import logo from '../../../static/assets/logo.svg';
import Bar from "../../../static/assets/bar.svg";
import Close from "../../../static/assets/circle-xmark.svg";
import Menu from "../../../static/assets/menu-burger.svg";
import Star from "../../../static/assets/star.svg";
import ArrowLeftIcon from "../../../static/assets/arrowLeftIcon.svg";
import ArrowRightIcon from "../../../static/assets/arrowRightIcon.svg";
import Bath from "../../../static/assets/bath.svg";
import Bed from "../../../static/assets/bed.svg";
import Guests2 from "../../../static/assets/users2.svg";
import Guests3 from "../../../static/assets/users3.svg";
import Arrow from "../../../static/assets/arrow-right.svg";
import ParkingSpace from "../../../static/assets/parkingSpace.svg";
import wifi from '../../../static/assets/wifi.svg';
import tv from '../../../static/assets/screen.svg';
import smoking from '../../../static/assets/smoking-ban.svg';
import microwave from '../../../static/assets/microwave.svg'
import airConditioner from '../../../static/assets/air-conditioner.svg'
import coffee from '../../../static/assets/coffee.svg';
import TravelDirections from "../../../static/assets/travel-directions.svg";
import Taxi from "../../../static/assets/taxi.svg";
import UberTaxi from "../../../static/assets/uber-taxi.svg";
import Bus from "../../../static/assets/bus_2322.svg";
import area from '../../../static/assets/maximize.svg'
import email from '../../../static/assets/email.svg'
import notFound from '../../../static/assets/notFound.svg'
import hairdryer from '../../../static/assets/hairdryer.svg'
import ironBoard from '../../../static/assets/ironing.svg'
import iron from '../../../static/assets/iron.svg'
import miniFridge from '../../../static/assets/mini-fridge.svg'

const svgMap = {
  "Thavki-Logo": Logo,
  Call: Call,
  Hotel: Hotel,
  miniFridge: miniFridge,
  Bar: Bar,
  hairdryer: hairdryer,
  Close: Close,
  Menu: Menu,
  Star: Star,
  coffee: coffee,
  ArrowLeftIcon: ArrowLeftIcon,
  ArrowRightIcon: ArrowRightIcon,
  Bath: Bath,
  logo: logo,
  ironBoard: ironBoard,
  Bed: Bed,
  iron:iron,
  notFound: notFound,
  Guests2: Guests2,
  Guests3: Guests3,
  Arrow: Arrow,
  radio: radio,
  ParkingSpace:ParkingSpace,
  wifi: wifi,
  microwave: microwave,
  tv: tv,
  smoking: smoking,
  airConditioner: airConditioner,
  TravelDirections: TravelDirections,
  Taxi: Taxi,
  UberTaxi: UberTaxi,
  view:view,
  Bus: Bus,
  area: area,
  email: email,
};

const Icon = ({ children, svg, className, ...rest }) => {
  const SvgComponent = svgMap[svg];

  const iconClasses = cn(
    // Example Tailwind CSS classes for width and height
    className // Allow overriding classes from parent components
  );

  return (
    <div className={iconClasses} {...rest}>
      {children}
      <SvgComponent />
    </div>
  );
};

Icon.propTypes = {
  svg: PropTypes.oneOf([
    "Thavki-Logo",
    "notFound",
    "ironBoard",
    "Call",
    "coffee",
    "radio",
    "view",
    "Arrow",
    "logo",
    "email",
    "miniFridge",
    "Hotel",
    "Bar",
    "Close",
    "hairdryer",
    "Menu",
    "iron",
    "Star",
    "Bath",
    "area",
    "Bed",
    "Guests2",
    "wifi",
    "Guests3",
    "tv",
    "airConditioner",
    "smoking",
    "microwave",
    "TravelDirections",
  ]).isRequired,
};

export default Icon;
