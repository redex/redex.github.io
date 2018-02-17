open! Vrroom;

module Tag = {
  let style = {
    open TypedGlamor;
    
    css([
      display(inlineBlock),
      opacity(0.75),
      fontSize(em(0.75)),
      lineHeight(em(1.6)),
      marginLeft(em(0.5)),
      whiteSpace(nowrap),
      backgroundColor(hex("fff3")),
      padding2(~v=zero, ~h=ex(1.)),
      textDecoration(none),
      borderRadius(ex(0.5)),

      hover([
        opacity(1.),
        textDecoration(underline),
      ])
    ])
  };

  let component = ReasonReact.statelessComponent("Tag");
  let make = (~name, ~url, ~customStyle="", _:childless) => {
    ...component,

    render: _self =>
      <Link to_=url className=((style |> TypedGlamor.toString) ++ " " ++ customStyle)>
        {name |> text}
      </Link>
  }
};

module Keyword = {
  let component = ReasonReact.statelessComponent("Tag");
  let make = (~name, _:childless) => {
    ...component,

    render: _self =>
      <Tag name url=("/keyword/" ++ name) />
  }
};

module Category = {
  let customStyle = {
    open TypedGlamor;
    
    css([
      border3(px(1), solid, currentColor),
    ])
  };

  let component = ReasonReact.statelessComponent("Tag");
  let make = (~name, _:childless) => {
    ...component,

    render: _self =>
      <Tag name url=("/category/" ++ name) customStyle=(customStyle |> TypedGlamor.toString) />
  }
};