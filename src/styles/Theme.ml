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
end

module Panel = struct
  module Color = struct
    let background: color = "white" |> Obj.magic
  end

  (* NOTE: Safari is INSANELY particular about the angle, test thoroughly if changed *)
  let crosshatchBackground = "repeating-linear-gradient(
    340deg,
    transparent,
    transparent 10px,
    hsl(6.9, 70.7%, 54%, .075) 10px,
    hsl(6.9, 70.7%, 54%, .075) 12px
  )"
end

module Inverted = struct
  module Color = struct
    let background = Color.primary

    let text: color = "white" |> Obj.magic

    let block = hex "rgba(255, 255, 255, .1)"
    let highlightedBlock = hex "rgba(255, 255, 255, .2)"
  end

  (* NOTE: Safari is INSANELY particular about the angle, test thoroughly if changed *)
  let crosshatchBackground = "repeating-linear-gradient(
    340deg,
    hsl(6.9, 70.7%, 54%),
    hsl(6.9, 70.7%, 54%) 10px,
    hsl(6.9, 70.7%, 58%) 10px,
    hsl(6.9, 70.7%, 58%) 12px
  )"
end

module Shadow = struct
  let overlay : shadow = "1ex 1ex 1em 0 rgba(0, 0, 0, .1)" |> Obj.magic
  let panel : shadow = "1px 1px 0 1px rgba(0, 0, 0, .05)" |> Obj.magic
end