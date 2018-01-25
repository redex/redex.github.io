module Icon(Ext: { let reactClass : ReasonReact.reactClass }) = {
  let make = (~className=?, children) =>
    ReasonReact.wrapJsForReason(
      ~reactClass=Ext.reactClass,
      ~props={
        "className": className
      },
      children
    );
};
module SvgIcon(Config: { let element: ReasonReact.reactElement }) = {
  let component = ReasonReact.statelessComponent("SvgIcon");
  let make = (_:array(unit)) => {
    ...component,
    render: _self =>
      Config.element
  }
};

module Book = Icon({
  [@bs.module "react-icons/lib/md"] external reactClass: ReasonReact.reactClass = "MdBook";
});

module Certificate = Icon({
  [@bs.module "react-icons/lib/fa"] external reactClass: ReasonReact.reactClass = "FaCertificate";
});

module Menu = Icon({
  [@bs.module "react-icons/lib/md"] external reactClass: ReasonReact.reactClass = "MdMenu";
});

module Ribbon = Icon({
  [@bs.module "react-icons/lib/io"] external reactClass: ReasonReact.reactClass = "IoRibbonB";
});

module Search = Icon({
  [@bs.module "react-icons/lib/fa"] external reactClass: ReasonReact.reactClass = "FaSearch";
});

module Star = Icon({
  [@bs.module "react-icons/lib/go"] external reactClass: ReasonReact.reactClass = "GoStar";
});

module Tags = Icon({
  [@bs.module "react-icons/lib/fa"] external reactClass: ReasonReact.reactClass = "FaTags";
});

module Verified = Icon({
  [@bs.module "react-icons/lib/md"] external reactClass: ReasonReact.reactClass = "MdVerifiedUser";
});

module Scale = Icon({
  [@bs.module "react-icons/lib/go"] external reactClass: ReasonReact.reactClass = "GoLaw";
});

module Chip = SvgIcon({
  let element =
    <svg viewBox="0 0 24 24">
      <path d="M6,4H18V5H21V7H18V9H21V11H18V13H21V15H18V17H21V19H18V20H6V19H3V17H6V15H3V13H6V11H3V9H6V7H3V5H6V4M11,15V18H12V15H11M13,15V18H14V15H13M15,15V18H16V15H15Z" />
    </svg>
});

module Nodejs = SvgIcon({
  let element =
    <svg viewBox="0 0 24 24">
      <path d="M12,1.85C11.73,1.85 11.45,1.92 11.22,2.05L3.78,6.35C3.3,6.63 3,7.15 3,7.71V16.29C3,16.85 3.3,17.37 3.78,17.65L5.73,18.77C6.68,19.23 7,19.24 7.44,19.24C8.84,19.24 9.65,18.39 9.65,16.91V8.44C9.65,8.32 9.55,8.22 9.43,8.22H8.5C8.37,8.22 8.27,8.32 8.27,8.44V16.91C8.27,17.57 7.59,18.22 6.5,17.67L4.45,16.5C4.38,16.45 4.34,16.37 4.34,16.29V7.71C4.34,7.62 4.38,7.54 4.45,7.5L11.89,3.21C11.95,3.17 12.05,3.17 12.11,3.21L19.55,7.5C19.62,7.54 19.66,7.62 19.66,7.71V16.29C19.66,16.37 19.62,16.45 19.55,16.5L12.11,20.79C12.05,20.83 11.95,20.83 11.88,20.79L10,19.65C9.92,19.62 9.84,19.61 9.79,19.64C9.26,19.94 9.16,20 8.67,20.15C8.55,20.19 8.36,20.26 8.74,20.47L11.22,21.94C11.46,22.08 11.72,22.15 12,22.15C12.28,22.15 12.54,22.08 12.78,21.94L20.22,17.65C20.7,17.37 21,16.85 21,16.29V7.71C21,7.15 20.7,6.63 20.22,6.35L12.78,2.05C12.55,1.92 12.28,1.85 12,1.85M14,8C11.88,8 10.61,8.89 10.61,10.39C10.61,12 11.87,12.47 13.91,12.67C16.34,12.91 16.53,13.27 16.53,13.75C16.53,14.58 15.86,14.93 14.3,14.93C12.32,14.93 11.9,14.44 11.75,13.46C11.73,13.36 11.64,13.28 11.53,13.28H10.57C10.45,13.28 10.36,13.37 10.36,13.5C10.36,14.74 11.04,16.24 14.3,16.24C16.65,16.24 18,15.31 18,13.69C18,12.08 16.92,11.66 14.63,11.35C12.32,11.05 12.09,10.89 12.09,10.35C12.09,9.9 12.29,9.3 14,9.3C15.5,9.3 16.09,9.63 16.32,10.66C16.34,10.76 16.43,10.83 16.53,10.83H17.5C17.55,10.83 17.61,10.81 17.65,10.76C17.69,10.72 17.72,10.66 17.7,10.6C17.56,8.82 16.38,8 14,8Z" />
    </svg>
});

module Html5 = SvgIcon({
  let element =
    <svg viewBox="0 0 24 24">
      <path d="M12,17.56L16.07,16.43L16.62,10.33H9.38L9.2,8.3H16.8L17,6.31H7L7.56,12.32H14.45L14.22,14.9L12,15.5L9.78,14.9L9.64,13.24H7.64L7.93,16.43L12,17.56M4.07,3H19.93L18.5,19.2L12,21L5.5,19.2L4.07,3Z" />
    </svg>
});

module AllInclusive = SvgIcon({
  let element =
    <svg viewBox="0 0 24 24">
      <path d="M18.6,6.62C17.16,6.62 15.8,7.18 14.83,8.15L7.8,14.39C7.16,15.03 6.31,15.38 5.4,15.38C3.53,15.38 2,13.87 2,12C2,10.13 3.53,8.62 5.4,8.62C6.31,8.62 7.16,8.97 7.84,9.65L8.97,10.65L10.5,9.31L9.22,8.2C8.2,7.18 6.84,6.62 5.4,6.62C2.42,6.62 0,9.04 0,12C0,14.96 2.42,17.38 5.4,17.38C6.84,17.38 8.2,16.82 9.17,15.85L16.2,9.61C16.84,8.97 17.69,8.62 18.6,8.62C20.47,8.62 22,10.13 22,12C22,13.87 20.47,15.38 18.6,15.38C17.7,15.38 16.84,15.03 16.16,14.35L15,13.34L13.5,14.68L14.78,15.8C15.8,16.81 17.15,17.37 18.6,17.37C21.58,17.37 24,14.96 24,12C24,9 21.58,6.62 18.6,6.62Z" />
    </svg>
});

module Infinity = SvgIcon({
  let element =
    <svg viewBox="0 0 24 24">
      <path d="M18.6,6.62C21.58,6.62 24,9 24,12C24,14.96 21.58,17.37 18.6,17.37C17.15,17.37 15.8,16.81 14.78,15.8L12,13.34L9.17,15.85C8.2,16.82 6.84,17.38 5.4,17.38C2.42,17.38 0,14.96 0,12C0,9.04 2.42,6.62 5.4,6.62C6.84,6.62 8.2,7.18 9.22,8.2L12,10.66L14.83,8.15C15.8,7.18 17.16,6.62 18.6,6.62M7.8,14.39L10.5,12L7.84,9.65C7.16,8.97 6.31,8.62 5.4,8.62C3.53,8.62 2,10.13 2,12C2,13.87 3.53,15.38 5.4,15.38C6.31,15.38 7.16,15.03 7.8,14.39M16.2,9.61L13.5,12L16.16,14.35C16.84,15.03 17.7,15.38 18.6,15.38C20.47,15.38 22,13.87 22,12C22,10.13 20.47,8.62 18.6,8.62C17.69,8.62 16.84,8.97 16.2,9.61Z" />
    </svg>
});

module Matrix = SvgIcon({
  let element =
    <svg viewBox="0 0 24 24">
      <path d="M2,2H6V4H4V20H6V22H2V2M20,4H18V2H22V22H18V20H20V4M9,5H10V10H11V11H8V10H9V6L8,6.5V5.5L9,5M15,13H16V18H17V19H14V18H15V14L14,14.5V13.5L15,13M9,13C10.1,13 11,14.34 11,16C11,17.66 10.1,19 9,19C7.9,19 7,17.66 7,16C7,14.34 7.9,13 9,13M9,14C8.45,14 8,14.9 8,16C8,17.1 8.45,18 9,18C9.55,18 10,17.1 10,16C10,14.9 9.55,14 9,14M15,5C16.1,5 17,6.34 17,8C17,9.66 16.1,11 15,11C13.9,11 13,9.66 13,8C13,6.34 13.9,5 15,5M15,6C14.45,6 14,6.9 14,8C14,9.1 14.45,10 15,10C15.55,10 16,9.1 16,8C16,6.9 15.55,6 15,6Z" />
    </svg>
});

module Laptop = SvgIcon({
  let element =
    <svg viewBox="0 0 24 24">
      <path d="M4,6H20V16H4M20,18A2,2 0 0,0 22,16V6C22,4.89 21.1,4 20,4H4C2.89,4 2,4.89 2,6V16A2,2 0 0,0 4,18H0V20H24V18H20Z" />
    </svg>
});