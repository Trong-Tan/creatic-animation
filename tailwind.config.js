/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: ['./**/*.{html,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        pops: ['Poppins']
      },
      colors: {
        primary: '#6D95FC'
      },
      margin: {
        46: '11.5rem',
        70: '17.5rem'
      },
      padding: {
        68: '17rem',
        70: '17.5rem'
      },
      height: {
        200: '50rem'
      }
    },
    keyframes: {
      wiggle: {
        '0%, 100%': {
          transform: 'rotate(-3deg)'
        },
        '50%': {
          transform: 'rotate(3deg)'
        }
      },
      'wiggle-more': {
        '0%, 100%': {
          transform: 'rotate(-12deg)'
        },
        '50%': {
          transform: 'rotate(12deg)'
        }
      },
      'rotate-y': {
        '0%': {
          transform: 'rotateY(360deg)'
        },
        '100%': {
          transform: 'rotateY(0)'
        }
      },
      'rotate-x': {
        '0%': {
          transform: 'rotateX(360deg)'
        },
        '100%': {
          transform: 'rotateX(0)'
        }
      },
      jump: {
        '0%, 100%': {
          transform: 'scale(100%)'
        },
        '10%': {
          transform: 'scale(80%)'
        },
        '50%': {
          transform: 'scale(120%)'
        }
      },
      'jump-in': {
        '0%': {
          transform: 'scale(0%)'
        },
        '80%': {
          transform: 'scale(120%)'
        },
        '100%': {
          transform: 'scale(100%)'
        }
      },
      'jump-out': {
        '0%': {
          transform: 'scale(100%)'
        },
        '20%': {
          transform: 'scale(120%)'
        },
        '100%': {
          transform: 'scale(0%)'
        }
      },
      shake: {
        '0%': {
          transform: 'translateX(0rem)'
        },
        '25%': {
          transform: 'translateX(-1rem)'
        },
        '75%': {
          transform: 'translateX(1rem)'
        },
        '100%': {
          transform: 'translateX(0rem)'
        }
      },
      fade: {
        '0%': {
          opacity: '0'
        },
        '100%': {
          opacity: '1'
        }
      },
      'fade-down': {
        '0%': {
          opacity: '0',
          transform: 'translateY(-2rem)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)'
        }
      },
      'fade-up': {
        '0%': {
          opacity: '0',
          transform: 'translateY(2rem)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateY(0)'
        }
      },
      'fade-left': {
        '0%': {
          opacity: '0',
          transform: 'translateX(2rem)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      'fade-right': {
        '0%': {
          opacity: '0',
          transform: 'translateX(-2rem)'
        },
        '100%': {
          opacity: '1',
          transform: 'translateX(0)'
        }
      },
      'flip-up': {
        '0%': {
          transform: 'rotateX(90deg)',
          transformOrigin: 'bottom'
        },
        '100%': {
          transform: 'rotateX(0)',
          transformOrigin: 'bottom'
        }
      },
      'flip-down': {
        '0%': {
          transform: 'rotateX(-90deg)',
          transformOrigin: 'top'
        },
        '100%': {
          transform: 'rotateX(0)',
          transformOrigin: 'top'
        }
      }
    },
    animation: {
      wiggle: 'wiggle 2s both',
      'wiggle-more': 'wiggle-more 2s both',
      'rotate-y': 'rotate-y 2s both',
      'rotate-x': 'rotate-x 2s both',
      jump: 'jump .5s both',
      'jump-in': 'jump-in .8s both',
      'jump-out': 'jump-out .5s both',
      shake: 'shake .5s both',
      fade: 'fade 2s both',
      'fade-down': 'fade-down 2s ',
      'fade-up': 'fade-up 2s ',
      'fade-left': 'fade-left 2s ',
      'fade-right': 'fade-right 2s ',
      'flip-up': 'flip-up 2s both',
      'flip-down': 'flip-down 2s both'
    }
  }
}
