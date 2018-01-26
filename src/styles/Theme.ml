open Css

module Color = struct
  let primary = hex "dd4c39"
  let darkPrimary: color = "hsl(6.9, 65%, 50%)" |> Obj.magic

  let background: color = "whiteSmoke" |> Obj.magic
  let darkBackground = (hex "ececec")

  let text = hex "444"
  let link = primary

  let subtleBorder = hex "eee"

  let bad = rgba 255 0 0 0.75

  let reason = hex "DD4C39"
  let ocaml = hex "C87A27"
  let javascript = hex "F7E018"
end

module Panel = struct
  module Color = struct
    let background: color = "white" |> Obj.magic
  end
end

module Inverted = struct
  module Color = struct
    let background = Color.primary

    let text: color = "white" |> Obj.magic

    let block = hex "rgba(255, 255, 255, .1)"
    let highlightedBlock = hex "rgba(255, 255, 255, .2)"
  end
end

module Shadow = struct
  let overlay : shadow = "1ex 1ex 1em 0 rgba(0, 0, 0, .1)" |> Obj.magic
  let panel : shadow = "1px 1px 0 1px rgba(0, 0, 0, .05)" |> Obj.magic
end