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
    <div className=Styles.root>
      
      <Helmet title="redex | Reason Package Index">
        <html lang="en" />
        <meta name="description" content="Package index for the ReasonML/BuckleScript ecosystem" />
      </Helmet>

      <nav className=Styles.topNav(state.showBurgerMenu) >
        <button className=Styles.burger onClick=(_e => send(`ToggleBurgerMenu))>
          <Icon.Menu />
        </button>
        <div className=CommonStyles.widthContainer>
          <span className="left" />
          <Link to_="/all"> ("All" |> text) </Link>
          <Link to_="/category/binding"> ("Bindings" |> text) </Link>
          <Link to_="/category/library"> ("Libraries" |> text) </Link>
          <Link to_="/category/tool"> ("Tools" |> text) </Link>
          <Link to_="/category/boilerplate"> ("Boilerplate" |> text) </Link>
          <span className="right">
            <Link className=Styles.publishLink to_="/publish"> ("Get Published" |> text) </Link>
          </span>
        </div>
      </nav>

      <div className=Styles.header>
        <div className=CommonStyles.widthContainer>
          <h1 className=Styles.title>
            <svg className=Styles.logo>
              /* NOTE: xlink stuff needed for safari */
              <use href="/logo.svg#logo" xmlnsXlink="http://www.w3.org/1999/xlink" xlinkHref="/logo.svg#logo"/>
            </svg>
            <em> {"re" |> text} </em> {"ason package in" |> text} <em>{"dex" |> text} </em>
          </h1>
        </div>
      </div>

      <div className=CommonStyles.widthContainer>
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
