open TypedGlamor

module Color = struct
  let primary = hex "dd4c39"
  let darkPrimary = hsl (num 6.9) 65 50

  let background = whitesmoke
  let darkBackground = hex "ececec"

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
    let background = white
  end
end

module Inverted = struct
  module Color = struct
    let background = Color.primary

    let text = white

    let block = rgba 255 255 255 0.1
    let highlightedBlock = rgba 255 255 255 0.2
  end
end

module Shadow = struct
  let overlay = shadow ~x:(ex 1.) ~y:(ex 1.) ~blur:(em 1.) (rgba 0 0 0 0.1)
  let panel = shadow ~x:(px 1) ~y:(px 1) ~spread:(px 1) (rgba 0 0 0 0.05)
end