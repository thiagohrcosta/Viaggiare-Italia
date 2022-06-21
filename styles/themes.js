import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    gray: {
      "900": "#181B23",
      "800": "#1F2029",
      "700": "#353646",
      "600": "#4B4D63",
      "500": "#616480",
      "400": "#797D9A",
      "300": "#9699B0",
      "200": "#B3B5C6",
      "100": "#D1D2DC",
      "50": "#EEEEF2",
    },
    blue: {
      "900": "#0A0F2B",
      "800": "#0F1C4A",
      "700": "#1D2F6F",
      "600": "#3A4F9D",
      "500": "#5C73C9",
      "400": "#7F8ED6",
      "300": "#A0B5E3",
      "200": "#C4CFE8",
      "100": "#E6E9F2",
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'gray.800',
        color: 'gray.50'
      }
    }
  }
})
