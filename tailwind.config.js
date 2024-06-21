/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    container: {
      center: true,
      padding: "5rem",
      screens: {
        sm: "640px",
        // => @media (min-width: 640px) { ... }

        md: "768px",
        // => @media (min-width: 768px) { ... }

        lg: "1024px",
        // => @media (min-width: 1024px) { ... }

        xl: "1280px",
        // => @media (min-width: 1280px) { ... }

        "2xl": "1536px",
        // => @media (min-width: 1536px) { ... }
      }
    },
    extend: {
      fontFamily: {
        sans: ["Raleway", "sans-serif"],
        serif: ["Dancing Script", "sans-serif"]
      },
      transitionProperty: {
        width: "width"
      },
      rotate: {
        17: "17deg",
        18: "18deg",
        19: "19deg",
        20: "20deg"
      },
      dropShadow: {
        "3xl": "0 35px 35px rgba(0, 0, 0, 0.25)",
        "4xl": [
          "0 35px 35px rgba(0, 0, 0, 0.25)",
          "0 45px 65px rgba(0, 0, 0, 0.15)"
        ]
      },
      maxWidth: { "8xl": "1408px" },
      colors: {
        black: "#000",
        white: "#fff",
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))"
        },
        primaryDark: "hsl(var(--primary-dark))",
        neutral: {
          DEFAULT: "hsl(var(--neutral-primary))",
          secondary: "hsl(var(--neutral-secondary))"
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))"
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))"
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))"
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))"
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))"
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))"
        },
        secondaryCard: {
          DEFAULT: "hsl(var(--secondary-card))"
        },
        cardText: {
          DEFAULT: "hsl(var(--card-text))"
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))"
        },
        failure: {
          DEFAULT: "hsl(var(--failure))",
          foreground: "hsl(var(--failure-foreground))"
        }
      },
      boxShadow: {
        primaryBottom: "0px 0.25px 3px 0px #C4AC94",
        primaryTop: "0px -6px 12px 0px #ebf4ff",
        secondaryBottom: "0px 1px 2px 0px #ebf4ff",
        secondaryTop: "0px -1px 2px 0px #ebf4ff",
        secondaryBox: "0px 9px 16px rgb(149, 190, 226, 0.5)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius)- 2px)",
        sm: "calc(var(--radius)- 4px)"
      },
      fontSize: {
        xs: "16px",
        sm: "18px",
        base: "20px",
        lg: "25px",
        xl: "31px",
        "2xl": "39px",
        "3xl": "49px"
      },
      // fontWeight: {},

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" }
        },
        "accordion-up": {
          to: { height: "0" },
          from: { height: "var(--radix-accordion-content-height)" }
        }
      },
      animation: {
        "accordion-up": "accordion-up 0.2s ease-out",
        "accordion-down": "accordion-up 0.2s ease-out"
      }
    }
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};
