open! Vrroom;
module Styles = FrontPageLayoutStyles;

type state = {
  showBurgerMenu: bool
};

let component = ReasonReact.reducerComponent("FrontPageLayout");
let make = (~children: unit => ReasonReact.reactElement, _:childless) => {
  ...component,

  initialState: () => {
    showBurgerMenu: false
  },
  reducer: (`ToggleBurgerMenu, state) => ReasonReact.Update({
    showBurgerMenu: !state.showBurgerMenu
  }),

  render: ({ send, state }) =>
    <div className=(Styles.root |> TypedGlamor.toString)>
      
      <Helmet title="redex | Reason Package Index">
        <html lang="en" />
        <meta name="description" content="Package index for the ReasonML/BuckleScript ecosystem" />
      </Helmet>

      <nav className=(Styles.topNav(state.showBurgerMenu) |> TypedGlamor.toString) >
        <button className=(Styles.burger |> TypedGlamor.toString) onClick=(_e => send(`ToggleBurgerMenu))>
          <Icon.Menu />
        </button>
        <div className=(CommonStyles.widthContainer |> TypedGlamor.toString)>
          <span className="left" />
          <Link to_="/all"> ("All" |> text) </Link>
          <Link to_="/category/binding"> ("Bindings" |> text) </Link>
          <Link to_="/category/library"> ("Libraries" |> text) </Link>
          <Link to_="/category/tool"> ("Tools" |> text) </Link>
          <Link to_="/category/boilerplate"> ("Boilerplate" |> text) </Link>
          <span className="right">
            <Link className=(Styles.publishLink |> TypedGlamor.toString) to_="/publish"> ("Submit a Package" |> text) </Link>
          </span>
        </div>
      </nav>

      <div className=(Styles.header |> TypedGlamor.toString)>
        <div className=(CommonStyles.widthContainer |> TypedGlamor.toString)>
          <h1 className=(Styles.title |> TypedGlamor.toString)>
            <svg className=(Styles.logo |> TypedGlamor.toString)>
              /* NOTE: xlink stuff needed for safari */
              <use href="/logo.svg#logo" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/logo.svg#logo"/>
            </svg>
            <em> {"re" |> text} </em> {"ason package in" |> text} <em>{"dex" |> text} </em>
          </h1>
        </div>
      </div>

      <div className=(CommonStyles.widthContainer |> TypedGlamor.toString)>
        (children())
      </div>

      <Footer context=`Front />

    </div>
};

let default =
  ReasonReact.wrapReasonForJs(
    ~component,
    jsProps => make(~children=jsProps##children, [||])
  );

let __esModule = true;
