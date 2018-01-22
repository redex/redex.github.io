open! Vrroom.Helpers;


module Tag = {
  let style = {
    open! Css;
    
    style([
      display(InlineBlock),
      opacity(0.75),
      fontSize(em(0.75)),
      lineHeight(em(1.6)),
      marginLeft(em(0.5)),
      unsafe("whiteSpace", "nowrap"),
      backgroundColor(hex("fff3")),
      unsafe("padding", "0 1ex"),
      textDecorationLine(None),
      borderRadius(ex(0.5)),

      hover([
        opacity(1.),
        textDecorationLine(Values([Underline])),
      ])
    ])
  };

  let component = ReasonReact.statelessComponent("Tag");
  let make = (~name, ~url, ~icon=?,  ~customStyle="", _children) => {
    ...component,

    render: _self =>
      <Link to_=url className=(style ++ " " ++ customStyle)>
        {name |> text}
      </Link>
  }
};

module Keyword = {
  let component = ReasonReact.statelessComponent("Tag");
  let make = (~name, _children) => {
    ...component,

    render: _self =>
      <Tag name url=("/keyword/" ++ name) />
  }
};

module Category = {
  let customStyle = {
    open! Css;
    
    style([
      border(px(1), Solid, currentColor),
    ])
  };

  let component = ReasonReact.statelessComponent("Tag");
  let make = (~name, _children) => {
    ...component,

    render: _self =>
      <Tag name url=("/category/" ++ name) customStyle />
  }
};