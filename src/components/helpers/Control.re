module Map = {
  let component = ReasonReact.statelessComponent("Control.Map");
  let make = (~items: array('a),
              ~empty: ReasonReact.reactElement=ReasonReact.nullElement,
              render: 'a => ReasonReact.reactElement) => {
    ...component,
    render: _self =>
      <Fragment>
        {
          switch items {
          | [||] => empty
          | _    => items |> Array.map(render)
                          |> ReasonReact.arrayToElement
          }
        }
      </Fragment>
  };
};

module IfSome = {
  let component = ReasonReact.statelessComponent("Control.Map");
  let make = (~option: option('a),
              render: 'a => ReasonReact.reactElement) => {
    ...component,
    render: _self =>
      switch option {
      | Some(value) => render(value)
      | None        => ReasonReact.nullElement
      }
  };
};