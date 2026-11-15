import React, { useEffect, useRef, useState } from 'react'
import { MapPin, Search, Navigation, RotateCcw } from 'lucide-react'

export interface Cursinho {
  id: string
  category: 'GRATUITO' | 'COM_BOLSA' | 'ACESSIVEL' | string
  name: string
  address: string | null
  region: string | null
  website: string | null
  facebook: string | null
  instagram: string | null
  schedule: string | null
  selectionProcess: string | null
  remoteModality: string | null
  inPersonSlots: string | null
  remoteSlots: string | null
  contacts: string | null
  email: string | null
  latitude: number | null
  longitude: number | null
  notes: string | null
}

type TipoCursoFiltro =
  | 'checkboxTodos'
  | 'checkboxGratuitos'
  | 'checkboxPagosBolsa'
  | 'checkboxPagosAcessiveis'

interface UserLocation {
  latitude: number
  longitude: number
  label?: string
}

declare global {
  interface Window {
    L?: any
  }
}

// Ícones de folha em SVG para os botões de filtro
function GreenLeafSvg({ className = 'w-5 h-5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 165 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_99_2)">
        <path
          d="M41.8486 157.82C44.6383 156.465 67.003 122.502 85.5329 113.718C104.104 104.782 119.032 102.797 131.527 108.086C144.021 113.375 141.576 121.293 145.516 125.908C149.264 130.633 153.856 137.04 150.826 145.933C146.836 157.805 137.483 168.564 114.269 171.887C91.0559 175.211 71.5969 169.35 60.9325 165.684C50.0766 162.128 41.8486 157.82 41.8486 157.82Z"
          fill="url(#paint0_linear_99_2)"
        />
        <path
          d="M46.605 158.594L144.879 125.074L147.059 128.408L46.605 158.594Z"
          fill="url(#paint1_linear_99_2)"
        />
        <path
          d="M0.369141 1.42079C3.90764 5.11889 18.5419 72.4507 42.3354 97.7527C66.2393 123.246 87.393 134.252 110.261 133.424C133.13 132.596 135.5 120.128 144.303 115.046C153.106 109.963 164.105 102.72 164.869 86.5857C165.68 65.4507 157.534 42.7243 122.954 23.2676C88.374 3.81089 54.1162 1.26369 35.0641 0.526287C16.012 -0.211113 0.369141 1.42079 0.369141 1.42079Z"
          fill="url(#paint2_linear_99_2)"
        />
        <path
          d="M5.08643 4.67578L139.52 117.534L144.878 114.44L5.08643 4.67578Z"
          fill="url(#paint3_linear_99_2)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_99_2"
          x1="4401.24"
          y1="1810.93"
          x2="7249.82"
          y2="-5934.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#8AC443" />
          <stop offset="1" stopColor="#75B843" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_99_2"
          x1="3637.06"
          y1="1767.14"
          x2="6618.38"
          y2="-4723.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#75B843" />
          <stop offset="1" stopColor="#4B9744" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_99_2"
          x1="10556.2"
          y1="-10287.3"
          x2="8896.16"
          y2="3255.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.000216171" stopColor="#C1DB74" />
          <stop offset="1" stopColor="#ACD259" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_99_2"
          x1="8525.21"
          y1="-7553.07"
          x2="6283.41"
          y2="3934.01"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#ACD259" stopOpacity="0.964706" />
          <stop offset="1" stopColor="#8AC443" />
        </linearGradient>
        <clipPath id="clip0_99_2">
          <rect width="165" height="173" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function OrangeLeafSvg({ className = 'w-5 h-5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 165 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_99_8)">
        <path
          d="M41.8486 157.82C44.6383 156.465 67.003 122.502 85.5329 113.718C104.104 104.782 119.032 102.797 131.527 108.086C144.021 113.375 141.576 121.293 145.516 125.908C149.264 130.633 153.856 137.04 150.826 145.933C146.836 157.805 137.483 168.564 114.269 171.887C91.0559 175.211 71.5969 169.35 60.9325 165.684C50.0766 162.128 41.8486 157.82 41.8486 157.82Z"
          fill="url(#paint0_linear_99_8)"
        />
        <path
          d="M46.605 158.594L144.879 125.074L147.059 128.408L46.605 158.594Z"
          fill="url(#paint1_linear_99_8)"
        />
        <path
          d="M0.369141 1.42079C3.90764 5.11889 18.5419 72.4507 42.3354 97.7527C66.2393 123.246 87.393 134.252 110.261 133.424C133.13 132.596 135.5 120.128 144.303 115.046C153.106 109.963 164.105 102.72 164.869 86.5857C165.68 65.4507 157.534 42.7243 122.954 23.2676C88.374 3.81089 54.1162 1.26369 35.0641 0.526287C16.012 -0.211113 0.369141 1.42079 0.369141 1.42079Z"
          fill="url(#paint2_linear_99_8)"
        />
        <path
          d="M5.08643 4.67578L139.52 117.534L144.878 114.44L5.08643 4.67578Z"
          fill="url(#paint3_linear_99_8)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_99_8"
          x1="4401.24"
          y1="1810.93"
          x2="7249.82"
          y2="-5934.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6400" />
          <stop offset="1" stopColor="#4B1F03" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_99_8"
          x1="3637.06"
          y1="1767.14"
          x2="6618.38"
          y2="-4723.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6400" />
          <stop offset="1" stopColor="#FF6400" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_99_8"
          x1="10556.2"
          y1="-10287.3"
          x2="8896.16"
          y2="3255.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.000216171" stopColor="#DBB074" />
          <stop offset="1" stopColor="#FF6400" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_99_8"
          x1="8525.21"
          y1="-7553.07"
          x2="6283.41"
          y2="3934.01"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FF6400" stopOpacity="0.964706" />
          <stop offset="1" stopColor="#FF6400" />
        </linearGradient>
        <clipPath id="clip0_99_8">
          <rect width="165" height="173" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

function YellowLeafSvg({ className = 'w-5 h-5 shrink-0' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 165 173"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_99_14)">
        <path
          d="M41.8486 157.82C44.6383 156.465 67.003 122.502 85.5329 113.718C104.104 104.782 119.032 102.797 131.527 108.086C144.021 113.375 141.576 121.293 145.516 125.908C149.264 130.633 153.856 137.04 150.826 145.933C146.836 157.805 137.483 168.564 114.269 171.887C91.0559 175.211 71.5969 169.35 60.9325 165.684C50.0766 162.128 41.8486 157.82 41.8486 157.82Z"
          fill="url(#paint0_linear_99_14)"
        />
        <path
          d="M46.605 158.594L144.879 125.074L147.059 128.408L46.605 158.594Z"
          fill="url(#paint1_linear_99_14)"
        />
        <path
          d="M0.369141 1.42079C3.90764 5.11889 18.5419 72.4507 42.3354 97.7527C66.2393 123.246 87.393 134.252 110.261 133.424C133.13 132.596 135.5 120.128 144.303 115.046C153.106 109.963 164.105 102.72 164.869 86.5857C165.68 65.4507 157.534 42.7243 122.954 23.2676C88.374 3.81089 54.1162 1.26369 35.0641 0.526287C16.012 -0.211113 0.369141 1.42079 0.369141 1.42079Z"
          fill="url(#paint2_linear_99_14)"
        />
        <path
          d="M5.08643 4.67578L139.52 117.534L144.878 114.44L5.08643 4.67578Z"
          fill="url(#paint3_linear_99_14)"
        />
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_99_14"
          x1="4401.24"
          y1="1810.93"
          x2="7249.82"
          y2="-5934.54"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#D2BC2B" />
          <stop offset="1" stopColor="#BBA40F" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_99_14"
          x1="3637.06"
          y1="1767.14"
          x2="6618.38"
          y2="-4723.82"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#B69E02" />
          <stop offset="1" stopColor="#847305" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_99_14"
          x1="10556.2"
          y1="-10287.3"
          x2="8896.16"
          y2="3255.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.000216171" stopColor="#EDB83A" />
          <stop offset="1" stopColor="#F7C147" />
        </linearGradient>
        <linearGradient
          id="paint3_linear_99_14"
          x1="8525.21"
          y1="-7553.07"
          x2="6283.41"
          y2="3934.01"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#FDAF00" stopOpacity="0.964706" />
          <stop offset="1" stopColor="#FFB100" />
        </linearGradient>
        <clipPath id="clip0_99_14">
          <rect width="165" height="173" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}

// SVGs originais do cursinhos.html para os marcadores em formato de árvore/ramo
const treeIconGreenSVG = `<svg width="175" height="439" viewBox="0 0 175 439" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_133_30)">
<path d="M44 193.634C46.7897 192.279 69.1544 158.316 87.6843 149.532C106.255 140.596 121.183 138.611 133.678 143.9C146.172 149.189 143.727 157.107 147.667 161.722C151.415 166.447 156.007 172.854 152.977 181.747C148.987 193.619 139.634 204.378 116.42 207.701C93.2073 211.025 73.7483 205.164 63.0839 201.498C52.228 197.942 44 193.634 44 193.634Z" fill="url(#paint0_linear_133_30)"/>
<path d="M48 193.52L146.274 160L148.454 163.334L48 193.52Z" fill="url(#paint1_linear_133_30)"/>
<path d="M102.381 436.88L98.9011 435.636C95.1537 421.361 97.3484 405.411 93.9439 391.084C97.1775 387.811 94.8755 385.5 96.5402 381.58C98.5543 380.445 99.5078 384.321 100.572 380.256C104.951 371.722 105.98 362.516 108.062 353.564C110.314 344.112 114.478 335.256 116.838 325.965C117.669 323.059 114.393 317.406 117.991 314.492C122.003 313.704 119.959 320.64 124.506 319.711C135.798 302.85 172.916 262.774 151.959 249.344C153.506 249.583 155.699 251.733 156.124 249.538C153.056 232.32 144.185 202.086 141.102 196.346C137.697 190.121 140.148 183.419 140.561 176.495C141.303 163.842 142.302 150.441 138.581 138.468C146.017 133.373 153.241 120.799 153.673 113.339C154.234 105.506 143.425 90.4719 140.252 83.0883C138.957 80.2097 136.285 75.6482 139.393 73.6964C140.299 75.806 145.19 74.8247 143.714 76.7648C140.775 77.2714 143.014 80.2428 141.858 81.7199C145.933 89.3211 149.429 97.1878 153.16 104.841C154.241 108.344 158.499 103.023 158.057 106.698C156.424 123.863 138.171 146.338 148.204 159.834C149.428 177.688 145.838 193.436 150.754 211.91C153.613 222.595 160.599 236.436 163.029 247.422C163.377 249.262 163.017 251.742 163.731 253.94C164.575 256.71 166.659 257.753 166.428 259.858C165.968 265.015 159.509 274.397 156.24 280.632C145.236 300.94 127.107 321.149 118.891 340.913C115.712 348.791 114.018 358.512 111.4 367.606C105.931 386.951 102.483 398.951 103.403 415.786C103.913 422.393 107.352 433.758 102.381 436.88Z" fill="#3D3D3C" stroke="#3D3D3C" stroke-width="3"/>
<path d="M5 43.0858L4.84436 41.5939L1.80029 41.9115L3.9135 44.12C3.91259 44.1191 3.91211 44.1186 3.91206 44.1186C3.91152 44.1191 3.96058 44.1789 4.05467 44.3473C4.15494 44.5268 4.27633 44.7748 4.41882 45.1004C4.70375 45.7516 5.03948 46.6356 5.42743 47.7444C6.20236 49.9593 7.14944 52.966 8.27138 56.584C8.5324 57.4257 8.80258 58.2995 9.08186 59.2028C11.1977 66.0459 13.8362 74.5794 16.9699 83.6406C24.036 104.073 33.7279 127.53 45.8736 140.445C69.9214 166.091 91.4642 177.438 114.946 176.588C126.706 176.162 133.341 172.719 138.157 168.639C140.061 167.027 141.679 165.313 143.165 163.739C143.517 163.366 143.861 163.001 144.2 162.648C146.004 160.765 147.679 159.167 149.684 158.01L149.684 158.01C158.526 152.904 170.194 145.301 170.998 128.322L170.999 128.308C171.413 117.517 169.539 106.257 163.111 95.208C156.688 84.1685 145.784 73.4511 128.32 63.6253C93.4239 43.9906 58.8745 41.4325 39.753 40.6924C30.1711 40.3216 21.4512 40.5466 15.1278 40.8639C11.9651 41.0227 9.39931 41.2046 7.62199 41.3472C6.73328 41.4184 6.04153 41.4798 5.57065 41.5236C5.33521 41.5454 5.15497 41.5629 5.03293 41.5749L4.89389 41.5888L4.85779 41.5925L4.84823 41.5935L4.84558 41.5938L4.84479 41.5939C4.84455 41.5939 4.84436 41.5939 5 43.0858Z" fill="url(#paint2_linear_133_30)" stroke="#5A9E06" stroke-width="3"/>
<path d="M9.08643 47.0723L143.52 159.931L148.878 156.837L9.08643 47.0723Z" fill="url(#paint3_linear_133_30)"/>
</g>
<defs>
<linearGradient id="paint0_linear_133_30" x1="4403.39" y1="1846.74" x2="7251.97" y2="-5898.73" gradientUnits="userSpaceOnUse">
<stop stop-color="#8AC443"/>
<stop offset="1" stop-color="#75B843"/>
</linearGradient>
<linearGradient id="paint1_linear_133_30" x1="3638.46" y1="1802.07" x2="6619.77" y2="-4688.89" gradientUnits="userSpaceOnUse">
<stop stop-color="#75B843"/>
<stop offset="1" stop-color="#4B9744"/>
</linearGradient>
<linearGradient id="paint2_linear_133_30" x1="10560.8" y1="-10245.6" x2="8900.79" y2="3297.16" gradientUnits="userSpaceOnUse">
<stop offset="0.000216171" stop-color="#C1DB74"/>
<stop offset="1" stop-color="#ACD259"/>
</linearGradient>
<linearGradient id="paint3_linear_133_30" x1="8529.21" y1="-7510.67" x2="6287.41" y2="3976.41" gradientUnits="userSpaceOnUse">
<stop stop-color="#ACD259" stop-opacity="0.964706"/>
<stop offset="1" stop-color="#8AC443"/>
</linearGradient>
<clipPath id="clip0_133_30">
<rect width="175" height="438.595" fill="white"/>
</clipPath>
</defs>
</svg>`

const treeIconOrangeSVG = `<svg width="176" height="440" viewBox="0 0 176 440" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_133_50)">
<path d="M51 193.634C53.6882 192.279 75.239 158.316 93.0946 149.532C110.99 140.596 125.375 138.611 137.415 143.9C149.454 149.189 147.098 157.107 150.895 161.722C154.506 166.447 158.931 172.854 156.012 181.747C152.167 193.619 143.154 204.378 120.785 207.701C98.4166 211.025 79.6658 205.164 69.3894 201.498C58.9286 197.942 51 193.634 51 193.634Z" fill="url(#paint0_linear_133_50)"/>
<path d="M52 192.52L150.274 159L152.454 162.334L52 192.52Z" fill="url(#paint1_linear_133_50)"/>
<path d="M106.526 438.093L103.046 436.848C99.2983 422.573 101.493 406.624 98.0885 392.296C101.322 389.024 99.0201 386.713 100.685 382.793C102.699 381.657 103.652 385.534 104.717 381.469C109.095 372.935 110.125 363.729 112.206 354.777C114.459 345.325 118.623 336.469 120.982 327.179C121.813 324.273 118.537 318.62 122.136 315.706C126.147 314.918 124.104 321.854 128.651 320.925C139.943 304.064 177.061 263.988 156.104 250.559C157.65 250.797 159.844 252.947 160.268 250.753C157.2 233.535 148.33 203.301 145.246 197.561C141.841 191.337 144.293 184.634 144.706 177.711C145.448 165.058 146.447 151.657 142.726 139.684C150.161 134.589 157.386 122.015 157.818 114.556C158.379 106.722 147.569 91.6885 144.397 84.305C143.102 81.4265 140.43 76.865 143.538 74.9132C144.444 77.0228 149.335 76.0415 147.859 77.9815C144.919 78.4882 147.159 81.4595 146.003 82.9366C150.078 90.5377 153.573 98.4043 157.304 106.058C158.385 109.56 162.644 104.239 162.201 107.914C160.569 125.079 142.316 147.554 152.349 161.05C153.572 178.903 149.983 194.651 154.898 213.125C157.757 223.81 164.744 237.651 167.173 248.637C167.521 250.477 167.162 252.957 167.876 255.154C168.719 257.924 170.804 258.967 170.573 261.072C170.113 266.229 163.654 275.611 160.385 281.846C149.381 302.154 131.251 322.363 123.036 342.126C119.857 350.004 118.163 359.725 115.545 368.819C110.075 388.164 106.628 400.164 107.548 416.999C108.058 423.605 111.497 434.97 106.526 438.093Z" fill="#3D3D3C" stroke="#3D3D3C" stroke-width="3"/>
<path d="M6 43.0858L5.84436 41.5939L2.80029 41.9115L4.9135 44.12C4.91259 44.1191 4.91211 44.1186 4.91206 44.1186C4.91152 44.1191 4.96058 44.1789 5.05467 44.3473C5.15494 44.5268 5.27633 44.7748 5.41882 45.1004C5.70375 45.7516 6.03948 46.6356 6.42743 47.7444C7.20236 49.9593 8.14944 52.966 9.27138 56.584C9.5324 57.4257 9.80258 58.2995 10.0819 59.2028C12.1977 66.0459 14.8362 74.5794 17.9699 83.6406C25.036 104.073 34.7279 127.53 46.8736 140.445C70.9214 166.091 92.4642 177.438 115.946 176.588C127.706 176.162 134.341 172.719 139.157 168.639C141.061 167.027 142.679 165.313 144.165 163.739C144.517 163.366 144.861 163.001 145.2 162.648C147.004 160.765 148.679 159.167 150.684 158.01L150.684 158.01C159.526 152.904 171.194 145.301 171.998 128.322L171.999 128.308C172.413 117.517 170.539 106.257 164.111 95.208C157.688 84.1685 146.784 73.4511 129.32 63.6253C94.4239 43.9906 59.8745 41.4325 40.753 40.6924C31.1711 40.3216 22.4512 40.5466 16.1278 40.8639C12.9651 41.0227 10.3993 41.2046 8.62199 41.3472C7.73328 41.4184 7.04153 41.4798 6.57065 41.5236C6.33521 41.5454 6.15497 41.5629 6.03293 41.5749L5.89389 41.5888L5.85779 41.5925L5.84823 41.5935L5.84558 41.5938L5.84479 41.5939C5.84455 41.5939 5.84436 41.5939 6 43.0858Z" fill="url(#paint2_linear_133_50)" stroke="#BA4900" stroke-width="3"/>
<path d="M12.0864 47.6758L146.52 160.534L151.878 157.44L12.0864 47.6758Z" fill="url(#paint3_linear_133_50)"/>
<path d="M12.0864 47.6758L146.52 160.534L151.878 157.44L12.0864 47.6758Z" fill="url(#paint4_linear_133_50)"/>
</g>
<defs>
<linearGradient id="paint0_linear_133_50" x1="4251.75" y1="1846.74" x2="7181.05" y2="-5828.36" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6400"/>
<stop offset="1" stop-color="#4B1F03"/>
</linearGradient>
<linearGradient id="paint1_linear_133_50" x1="3642.46" y1="1801.07" x2="6623.77" y2="-4689.89" gradientUnits="userSpaceOnUse">
<stop offset="0.627846" stop-color="#D45300"/>
<stop offset="1" stop-color="#BA4900"/>
</linearGradient>
<linearGradient id="paint2_linear_133_50" x1="10561.8" y1="-10245.6" x2="8901.79" y2="3297.16" gradientUnits="userSpaceOnUse">
<stop offset="0.000216171" stop-color="#DBB074"/>
<stop offset="1" stop-color="#FF6400"/>
</linearGradient>
<linearGradient id="paint3_linear_133_50" x1="8532.21" y1="-7510.07" x2="6290.41" y2="3977.01" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6400" stop-opacity="0.964706"/>
<stop offset="1" stop-color="#FF6400"/>
</linearGradient>
<linearGradient id="paint4_linear_133_50" x1="8532.21" y1="-7510.07" x2="6290.41" y2="3977.01" gradientUnits="userSpaceOnUse">
<stop stop-color="#FF6400" stop-opacity="0.964706"/>
<stop offset="1" stop-color="#FF6400"/>
</linearGradient>
<clipPath id="clip0_133_50">
<rect width="175.11" height="438.595" fill="white" transform="translate(0 0.603516)"/>
</clipPath>
</defs>
</svg>`

const treeIconYellowSVG = `<svg width="176" height="440" viewBox="0 0 176 440" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_133_70)">
<path d="M49 194.634C51.7897 193.279 74.1544 159.316 92.6843 150.532C111.255 141.596 126.183 139.611 138.678 144.9C151.172 150.189 148.727 158.107 152.667 162.722C156.415 167.447 161.007 173.854 157.977 182.747C153.987 194.619 144.634 205.378 121.42 208.701C98.2073 212.025 78.7483 206.164 68.0839 202.498C57.228 198.942 49 194.634 49 194.634Z" fill="url(#paint0_linear_133_70)"/>
<path d="M52 192.52L150.274 159L152.454 162.334L52 192.52Z" fill="url(#paint1_linear_133_70)"/>
<path d="M107.625 438.845L104.145 437.601C100.397 423.326 102.592 407.377 99.1876 393.049C102.421 389.777 100.119 387.465 101.784 383.545C103.798 382.41 104.752 386.287 105.816 382.222C110.194 373.688 111.224 364.482 113.306 355.53C115.558 346.078 119.722 337.222 122.082 327.932C122.912 325.026 119.637 319.373 123.235 316.459C127.246 315.671 125.203 322.606 129.75 321.678C141.042 304.817 178.16 264.741 157.203 251.312C158.749 251.55 160.943 253.7 161.367 251.506C158.299 234.288 149.429 204.054 146.345 198.314C142.941 192.09 145.392 185.387 145.805 178.464C146.547 165.811 147.546 152.41 143.825 140.437C151.26 135.342 158.485 122.768 158.917 115.309C159.478 107.475 148.669 92.4414 145.496 85.0579C144.201 82.1794 141.529 77.6179 144.637 75.6661C145.543 77.7757 150.434 76.7944 148.958 78.7344C146.018 79.2411 148.258 82.2124 147.102 83.6896C151.177 91.2906 154.672 99.1572 158.403 106.811C159.484 110.313 163.743 104.992 163.301 108.667C161.668 125.832 143.415 148.307 153.448 161.803C154.671 179.656 151.082 195.404 155.997 213.878C158.856 224.562 165.843 238.404 168.272 249.39C168.62 251.23 168.261 253.71 168.975 255.907C169.819 258.677 171.903 259.72 171.672 261.825C171.212 266.982 164.753 276.364 161.484 282.599C150.48 302.907 132.35 323.116 124.135 342.879C120.956 350.757 119.262 360.478 116.644 369.572C111.175 388.917 107.727 400.917 108.647 417.752C109.157 424.358 112.596 435.723 107.625 438.845Z" fill="#3D3D3C" stroke="#3D3D3C" stroke-width="3"/>
<path d="M7.36914 44.4208L7.2135 42.9289L4.16943 43.2464L6.28264 45.455C6.28173 45.454 6.28125 45.4535 6.2812 45.4536C6.28066 45.454 6.32972 45.5138 6.42381 45.6822C6.52408 45.8617 6.64547 46.1097 6.78796 46.4354C7.07289 47.0866 7.40862 47.9706 7.79657 49.0794C8.5715 51.2943 9.51858 54.301 10.6405 57.919C10.9015 58.7607 11.1717 59.6345 11.451 60.5378C13.5669 67.3809 16.2054 75.9144 19.339 84.9755C26.4052 105.408 36.0971 128.865 48.2427 141.78C72.2905 167.426 93.8333 178.773 117.315 177.923C129.076 177.497 135.71 174.054 140.526 169.974C142.43 168.362 144.048 166.648 145.534 165.074C145.886 164.701 146.23 164.336 146.569 163.983C148.373 162.1 150.049 160.502 152.053 159.345L152.053 159.345C160.895 154.239 172.563 146.636 173.367 129.657L173.368 129.643C173.782 118.852 171.908 107.592 165.48 96.5429C159.057 85.5035 148.153 74.786 130.69 64.9603C95.7931 45.3255 61.2436 42.7675 42.1222 42.0274C32.5402 41.6565 23.8204 41.8815 17.4969 42.1989C14.3342 42.3576 11.7684 42.5396 9.99114 42.6821C9.10242 42.7534 8.41067 42.8148 7.93979 42.8585C7.70435 42.8804 7.52411 42.8978 7.40207 42.9099L7.26303 42.9238L7.22693 42.9275L7.21737 42.9285L7.21472 42.9288L7.21393 42.9288C7.21369 42.9289 7.2135 42.9289 7.36914 44.4208Z" fill="url(#paint2_linear_133_70)" stroke="#E7A100" stroke-width="3"/>
<path d="M12.0864 47.6758L146.52 160.534L151.878 157.44L12.0864 47.6758Z" fill="url(#paint3_linear_133_70)"/>
<path d="M12.0864 47.6758L146.52 160.534L151.878 157.44L12.0864 47.6758Z" fill="url(#paint4_linear_133_70)"/>
</g>
<defs>
<linearGradient id="paint0_linear_133_70" x1="4408.39" y1="1847.74" x2="7256.97" y2="-5897.73" gradientUnits="userSpaceOnUse">
<stop stop-color="#D2BC2B"/>
<stop offset="1" stop-color="#BBA40F"/>
</linearGradient>
<linearGradient id="paint1_linear_133_70" x1="3642.46" y1="1801.07" x2="6623.77" y2="-4689.89" gradientUnits="userSpaceOnUse">
<stop stop-color="#B69E02"/>
<stop offset="1" stop-color="#847305"/>
</linearGradient>
<linearGradient id="paint2_linear_133_70" x1="10563.2" y1="-10244.3" x2="8903.16" y2="3298.5" gradientUnits="userSpaceOnUse">
<stop offset="0.000216171" stop-color="#EDB83A"/>
<stop offset="1" stop-color="#F7C147"/>
</linearGradient>
<linearGradient id="paint3_linear_133_70" x1="8532.21" y1="-7510.07" x2="6290.41" y2="3977.01" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDAF00" stop-opacity="0.964706"/>
<stop offset="1" stop-color="#FFB100"/>
</linearGradient>
<linearGradient id="paint4_linear_133_70" x1="8532.21" y1="-7510.07" x2="6290.41" y2="3977.01" gradientUnits="userSpaceOnUse">
<stop stop-color="#FDAF00" stop-opacity="0.964706"/>
<stop offset="1" stop-color="#FFB100"/>
</linearGradient>
<clipPath id="clip0_133_70">
<rect width="175.11" height="438.595" fill="white" transform="translate(0 0.603516)"/>
</clipPath>
</defs>
</svg>`

const shadowSVG = `<svg width="50" height="64" viewBox="0 0 50 64" fill="none" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
<rect width="50" height="64" fill="url(#pattern0_95_2)"/>
<defs>
<pattern id="pattern0_95_2" patternContentUnits="objectBoundingBox" width="1" height="1">
<use xlink:href="#image0_95_2" transform="scale(0.02 0.015625)"/>
</pattern>
<image id="image0_95_2" width="50" height="64" xlink:href="data:image/png;base64,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"/>
</defs>
</svg>`

function svgToDataURL(svg: string) {
  return 'data:image/svg+xml;base64,' + btoa(svg)
}

// Função para calcular a distância entre dois pontos (Haversine) em km
function calcularDistancia(lat1: number, lon1: number, lat2: number, lon2: number) {
  const R = 6371 // Raio da Terra em km
  const dLat = ((lat2 - lat1) * Math.PI) / 180
  const dLon = ((lon2 - lon1) * Math.PI) / 180
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos((lat1 * Math.PI) / 180) *
      Math.cos((lat2 * Math.PI) / 180) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2)
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
  return R * c
}

// Gera exatamente o Card HTML do cursinhos.html com os dados vindos do back-end
function gerarCardHTML(curso: Cursinho) {
  return `
    <article class="card" style="font-family: Arial, Helvetica, sans-serif; font-size: 13px; line-height: 1.4;">
      <header class="card-header">
        <h2 style="font-size: 16px; font-weight: bold; margin: 0 0 6px 0; color: #1f2937;">${curso.name || 'Nome não disponível'}</h2>
        <p style="margin: 6px 0;"><strong>Região:</strong> ${curso.region || 'Região não disponível'}</p>
      </header>
      <div class="card-body">
        <p style="margin: 6px 0;"><strong>Endereço:</strong> ${curso.address || 'Endereço não disponível'}</p>
        <p style="margin: 6px 0;"><strong>Horário das Aulas:</strong> ${curso.schedule || 'Horário não disponível'}</p>
        <p style="margin: 6px 0;"><strong>Processo Seletivo:</strong> ${curso.selectionProcess || 'Não informado'}</p>
        <p style="margin: 6px 0;"><strong>Modalidade Remota:</strong> ${curso.remoteModality || 'Não informado'}</p>
        <p style="margin: 6px 0;"><strong>Vagas Presenciais:</strong> ${curso.inPersonSlots || 'Não informado'}</p>
        <p style="margin: 6px 0;"><strong>Vagas Remotas:</strong> ${curso.remoteSlots || 'Não informado'}</p>
        <p style="margin: 6px 0;"><strong>Contato:</strong> ${curso.contacts || 'Não disponível'}</p>
        <p style="margin: 6px 0;"><strong>E-mail:</strong> ${curso.email || 'Não disponível'}</p>
        <p style="margin: 6px 0;"><strong>Observação:</strong> ${curso.notes || 'Nenhuma observação'}</p>
      </div>
      <footer class="card-footer">
        <p style="margin: 6px 0; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
          <strong>Site:</strong> 
          <a href="${curso.website || '#'}" target="_blank" rel="noopener noreferrer" style="color: #16a34a;">
            ${curso.website ? curso.website : 'Site não disponível'}
          </a>
        </p>
        <p style="margin: 6px 0;">
          <strong>Facebook:</strong> 
          <a href="${curso.facebook || '#'}" target="_blank" rel="noopener noreferrer" style="color: #16a34a;">
            ${curso.facebook ? 'Acessar Facebook' : 'Não disponível'}
          </a>
        </p>
        <p style="margin: 6px 0;">
          <strong>Instagram:</strong> 
          <a href="${curso.instagram || '#'}" target="_blank" rel="noopener noreferrer" style="color: #16a34a;">
            ${curso.instagram ? 'Acessar Instagram' : 'Não disponível'}
          </a>
        </p>
      </footer>
    </article>
  `
}

export function CursinhosMap() {
  const [cursinhos, setCursinhos] = useState<Cursinho[]>([])
  const [tipoCurso, setTipoCurso] = useState<TipoCursoFiltro>('checkboxTodos')
  const [enderecoInput, setEnderecoInput] = useState('')
  const [userLocation, setUserLocation] = useState<UserLocation | null>(null)
  const [distanciaKm, setDistanciaKm] = useState<number>(15)
  const [buscandoEndereco, setBuscandoEndereco] = useState(false)
  const [leafletReady, setLeafletReady] = useState(false)

  const trackRef = useRef<HTMLDivElement | null>(null)
  const cardRef = useRef<HTMLDivElement | null>(null)
  const mapContainerRef = useRef<HTMLDivElement | null>(null)
  const mapRef = useRef<any>(null)
  const markerGroupRef = useRef<any>(null)
  const circleGroupRef = useRef<any>(null)
  const localizationGroupRef = useRef<any>(null)
  const iconsRef = useRef<{
    treeIconGreen: any
    treeIconOrange: any
    treeIconRed: any
  } | null>(null)

  const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:3333'

  // Centraliza o componente no meio da tela (position: fixed) durante o scroll por uma distância determinada
  useEffect(() => {
    const PIN_SCROLL_DISTANCE = 650

    const updatePinPosition = () => {
      const trackEl = trackRef.current
      const cardEl = cardRef.current
      if (!trackEl || !cardEl) return

      const isDesktop = window.innerWidth >= 1024
      if (!isDesktop) {
        trackEl.style.height = 'auto'
        cardEl.style.position = 'relative'
        cardEl.style.top = '0px'
        cardEl.style.left = '0px'
        cardEl.style.right = '0px'
        cardEl.style.zIndex = '10'
        return
      }

      const vh = window.innerHeight
      const ch = cardEl.offsetHeight
      const targetTop = Math.max(16, Math.round((vh - ch) / 2))

      trackEl.style.height = `${ch + PIN_SCROLL_DISTANCE}px`

      const rect = trackEl.getBoundingClientRect()

      if (rect.top > targetTop) {
        // Antes de chegar ao centro da tela
        cardEl.style.position = 'absolute'
        cardEl.style.top = '0px'
        cardEl.style.left = '0px'
        cardEl.style.right = '0px'
        cardEl.style.zIndex = '10'
      } else if (rect.top + PIN_SCROLL_DISTANCE >= targetTop) {
        // Fixado (position: fixed) exatamente no centro da tela enquanto o usuário rola por PIN_SCROLL_DISTANCE px
        cardEl.style.position = 'fixed'
        cardEl.style.top = `${targetTop}px`
        cardEl.style.left = '0px'
        cardEl.style.right = '0px'
        cardEl.style.zIndex = '30'
      } else {
        // Após rolar a distância definida, libera no final do track para continuar descendo a página
        cardEl.style.position = 'absolute'
        cardEl.style.top = `${PIN_SCROLL_DISTANCE}px`
        cardEl.style.left = '0px'
        cardEl.style.right = '0px'
        cardEl.style.zIndex = '10'
      }
    }

    updatePinPosition()

    const handleResize = () => {
      updatePinPosition()
      if (mapRef.current) {
        mapRef.current.invalidateSize()
      }
    }

    const resizeObserver = new ResizeObserver(() => {
      updatePinPosition()
      if (mapRef.current) {
        mapRef.current.invalidateSize()
      }
    })

    if (cardRef.current) {
      resizeObserver.observe(cardRef.current)
    }

    window.addEventListener('scroll', updatePinPosition, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      resizeObserver.disconnect()
      window.removeEventListener('scroll', updatePinPosition)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  // 1. Busca os cursinhos do back-end
  useEffect(() => {
    let active = true
    async function loadCursinhos() {
      try {
        const res = await fetch(`${apiUrl}/api/cursinhos`)
        if (!res.ok) return
        const data: Cursinho[] = await res.json()
        if (active) {
          setCursinhos(data)
        }
      } catch (err) {
        console.error('Erro ao buscar cursinhos do back-end:', err)
      }
    }
    loadCursinhos()
    return () => {
      active = false
    }
  }, [apiUrl])

  // 2. Carrega Leaflet CSS e JS
  useEffect(() => {
    if (window.L) {
      setLeafletReady(true)
      return
    }

    const cssId = 'leaflet-css'
    if (!document.getElementById(cssId)) {
      const link = document.createElement('link')
      link.id = cssId
      link.rel = 'stylesheet'
      link.href = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.css'
      document.head.appendChild(link)
    }

    const scriptId = 'leaflet-js'
    const existingScript = document.getElementById(scriptId) as HTMLScriptElement | null
    if (existingScript) {
      if (window.L) {
        setLeafletReady(true)
      } else {
        existingScript.addEventListener('load', () => setLeafletReady(true))
      }
      return
    }

    const script = document.createElement('script')
    script.id = scriptId
    script.src = 'https://unpkg.com/leaflet@1.9.4/dist/leaflet.js'
    script.async = true
    script.onload = () => setLeafletReady(true)
    document.body.appendChild(script)
  }, [])

  // 3. Inicializa o mapa e os ícones de árvore exatamente como no cursinhos.html
  useEffect(() => {
    if (!leafletReady || !mapContainerRef.current || mapRef.current) return

    const L = window.L

    const treeIconGreen = L.icon({
      iconUrl: svgToDataURL(treeIconGreenSVG),
      shadowUrl: svgToDataURL(shadowSVG),
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    })

    const treeIconOrange = L.icon({
      iconUrl: svgToDataURL(treeIconOrangeSVG),
      shadowUrl: svgToDataURL(shadowSVG),
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    })

    const treeIconRed = L.icon({
      iconUrl: svgToDataURL(treeIconYellowSVG),
      shadowUrl: svgToDataURL(shadowSVG),
      iconSize: [38, 95],
      shadowSize: [50, 64],
      iconAnchor: [22, 94],
      shadowAnchor: [4, 62],
      popupAnchor: [-3, -76],
    })

    iconsRef.current = { treeIconGreen, treeIconOrange, treeIconRed }

    const mapEl = mapContainerRef.current
    const map = L.map(mapEl, {
      center: [-23.55052, -46.633308], // Posição inicial de São Paulo
      zoom: 11,
      minZoom: 2,
      maxZoom: 18,
      scrollWheelZoom: false,
    })

    // Ativa o zoom com scroll do mouse somente após clicar/interagir no mapa,
    // para não travar a rolagem da página enquanto o componente está centralizado (fixed)
    const enableWheelZoom = () => map.scrollWheelZoom.enable()
    const disableWheelZoom = () => map.scrollWheelZoom.disable()

    map.on('click', enableWheelZoom)
    map.on('mousedown', enableWheelZoom)
    mapEl.addEventListener('mouseleave', disableWheelZoom)

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors',
    }).addTo(map)

    markerGroupRef.current = L.layerGroup().addTo(map)
    circleGroupRef.current = L.layerGroup().addTo(map)
    localizationGroupRef.current = L.layerGroup().addTo(map)
    mapRef.current = map

    setTimeout(() => {
      map.invalidateSize()
    }, 100)

    return () => {
      mapEl.removeEventListener('mouseleave', disableWheelZoom)
      map.remove()
      mapRef.current = null
    }
  }, [leafletReady])

  // 4. Atualiza os pinos e o círculo de localização conforme os filtros (lógica fiel ao cursinhos.html)
  useEffect(() => {
    if (
      !leafletReady ||
      !mapRef.current ||
      !markerGroupRef.current ||
      !circleGroupRef.current ||
      !localizationGroupRef.current ||
      !iconsRef.current
    ) {
      return
    }

    const L = window.L
    const markerGroup = markerGroupRef.current
    const circleGroup = circleGroupRef.current
    const localizationGroup = localizationGroupRef.current
    const { treeIconGreen, treeIconOrange, treeIconRed } = iconsRef.current

    const cursinhosGratuitos = cursinhos.filter((c) => c.category === 'GRATUITO')
    const cursinhosCarosComBolsa = cursinhos.filter((c) => c.category === 'COM_BOLSA')
    const cursinhosAcessiveis = cursinhos.filter((c) => c.category === 'ACESSIVEL')

    function removeCircle() {
      circleGroup.clearLayers()
    }

    function removeLocalization() {
      localizationGroup.clearLayers()
    }

    function exibeLocalizacaoComCirculo() {
      if (userLocation) {
        const { latitude, longitude } = userLocation
        removeCircle()
        removeLocalization()
        const pin = L.marker([latitude, longitude])
          .bindPopup(userLocation.label || 'Minha localização')
          .openPopup()
        localizationGroup.addLayer(pin)

        L.circle([latitude, longitude], {
          color: '',
          fillColor: '#30f',
          fillOpacity: 0.2,
          radius: distanciaKm * 1000,
        }).addTo(circleGroup)
      } else {
        removeCircle()
        removeLocalization()
      }
    }

    function adicionarCursosDaCategoria(lista: Cursinho[], icon: any) {
      const cursosParaExibir = userLocation
        ? lista.filter((curso) => {
            const lat = Number(curso.latitude)
            const lon = Number(curso.longitude)
            if (
              curso.latitude === null ||
              curso.longitude === null ||
              !Number.isFinite(lat) ||
              !Number.isFinite(lon)
            ) {
              return false
            }
            const distancia = calcularDistancia(
              userLocation.latitude,
              userLocation.longitude,
              lat,
              lon
            )
            return distancia <= distanciaKm
          })
        : lista

      cursosParaExibir.forEach((marker) => {
        const lat = Number(marker.latitude)
        const lon = Number(marker.longitude)
        if (
          marker.latitude === null ||
          marker.longitude === null ||
          !Number.isFinite(lat) ||
          !Number.isFinite(lon)
        ) {
          return
        }
        const pin = L.marker([lat, lon], { icon })
          .bindPopup(gerarCardHTML(marker))
          .closePopup()
        markerGroup.addLayer(pin)
      })
    }

    exibeLocalizacaoComCirculo()
    markerGroup.clearLayers()

    switch (tipoCurso) {
      case 'checkboxTodos':
        adicionarCursosDaCategoria(cursinhosGratuitos, treeIconGreen)
        adicionarCursosDaCategoria(cursinhosCarosComBolsa, treeIconOrange)
        adicionarCursosDaCategoria(cursinhosAcessiveis, treeIconRed)
        break
      case 'checkboxGratuitos':
        adicionarCursosDaCategoria(cursinhosGratuitos, treeIconGreen)
        break
      case 'checkboxPagosBolsa':
        adicionarCursosDaCategoria(cursinhosCarosComBolsa, treeIconOrange)
        break
      case 'checkboxPagosAcessiveis':
        adicionarCursosDaCategoria(cursinhosAcessiveis, treeIconRed)
        break
      default:
        break
    }
  }, [cursinhos, tipoCurso, userLocation, distanciaKm, leafletReady])

  // Geocodifica o endereço digitado pelo usuário usando Nominatim (OpenStreetMap)
  const handleBuscarEndereco = async (e: React.FormEvent) => {
    e.preventDefault()
    const query = enderecoInput.trim()
    if (!query) {
      setUserLocation(null)
      return
    }

    try {
      setBuscandoEndereco(true)
      const url = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
        query + ', São Paulo, Brasil'
      )}&limit=1`
      const res = await fetch(url)
      const data = await res.json()
      if (Array.isArray(data) && data.length > 0) {
        const lat = parseFloat(data[0].lat)
        const lon = parseFloat(data[0].lon)
        setUserLocation({ latitude: lat, longitude: lon, label: query })
        if (mapRef.current) {
          mapRef.current.setView([lat, lon], 12)
        }
      }
    } catch (err) {
      console.error('Erro ao buscar localização:', err)
    } finally {
      setBuscandoEndereco(false)
    }
  }

  const handleUsarMinhaLocalizacao = () => {
    if (!navigator.geolocation) return
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude
        const lon = pos.coords.longitude
        setUserLocation({
          latitude: lat,
          longitude: lon,
          label: 'Minha localização',
        })
        if (mapRef.current) {
          mapRef.current.setView([lat, lon], 12)
        }
      },
      (err) => {
        console.error('Erro ao obter geolocalização:', err)
      }
    )
  }

  const handleLimparFiltroLocalizacao = () => {
    setEnderecoInput('')
    setUserLocation(null)
    if (mapRef.current) {
      mapRef.current.setView([-23.55052, -46.633308], 11)
    }
  }

  return (
    <div ref={trackRef} className="w-full mb-20 relative">
      {/* Protege os ícones de árvore do Leaflet contra o reset `img { max-width: 100%; height: auto; }` do Tailwind */}
      <style>{`
        #vttMapOverview .leaflet-marker-icon,
        #vttMapOverview .leaflet-marker-shadow,
        #vttMapOverview .leaflet-tile {
          max-width: none !important;
          max-height: none !important;
        }
        #vttMapOverview .leaflet-popup-content p {
          margin: 10px 0;
        }
        @media screen and (max-width: 600px) {
          #vttMapOverview .leaflet-popup-content {
            width: 250px !important;
          }
        }
      `}</style>

      <div
        ref={cardRef}
        className="w-full bg-white shadow-sm border-y border-gray-100 overflow-hidden flex flex-col lg:flex-row lg:h-[min(660px,86vh)]"
      >
        {/* Coluna Esquerda: Filtros e Informações */}
        <div className="p-6 md:p-8 lg:w-4/12 xl:w-3/12 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-gray-100 lg:overflow-y-auto">
          <div>
            <div className="flex items-center gap-3.5 mb-3">
              <div className="w-11 h-11 bg-green-50 text-primary rounded-2xl flex items-center justify-center shrink-0">
                <MapPin size={22} />
              </div>
              <h2 className="text-2xl xl:text-3xl font-extrabold text-primary leading-tight">
                Mapa de Cursinhos
              </h2>
            </div>
            <p className="text-gray-600 text-sm leading-relaxed mb-4">
              O Semeando Educação reuniu vários cursinhos do estado de São Paulo
              para ajudar você a encontrar o mais próximo de sua casa!
            </p>

            {/* Botões de Filtro de Modalidade com as Folhas em SVG */}
            <div className="mb-4">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                Modalidade de Cursinho
              </label>
              <div className="grid grid-cols-1 gap-2">
                {[
                  {
                    id: 'checkboxTodos' as TipoCursoFiltro,
                    label: 'Todos os cursinhos',
                    icon: (
                      <div className="flex items-center -space-x-1.5 shrink-0">
                        <GreenLeafSvg className="w-5 h-5" />
                        <OrangeLeafSvg className="w-5 h-5" />
                        <YellowLeafSvg className="w-5 h-5" />
                      </div>
                    ),
                  },
                  {
                    id: 'checkboxGratuitos' as TipoCursoFiltro,
                    label: 'Cursos gratuitos',
                    icon: <GreenLeafSvg className="w-6 h-6 shrink-0" />,
                  },
                  {
                    id: 'checkboxPagosBolsa' as TipoCursoFiltro,
                    label: 'Cursos pagos (com bolsa)',
                    icon: <OrangeLeafSvg className="w-6 h-6 shrink-0" />,
                  },
                  {
                    id: 'checkboxPagosAcessiveis' as TipoCursoFiltro,
                    label: 'Cursos pagos acessíveis',
                    icon: <YellowLeafSvg className="w-6 h-6 shrink-0" />,
                  },
                ].map((opt) => {
                  const isSelected = tipoCurso === opt.id
                  return (
                    <button
                      key={opt.id}
                      type="button"
                      onClick={() => setTipoCurso(opt.id)}
                      className={`w-full flex items-center justify-between gap-3 px-3.5 py-2.5 rounded-xl border text-sm transition-all text-left ${
                        isSelected
                          ? 'bg-green-50 border-primary text-primary font-bold shadow-sm'
                          : 'bg-gray-50 border-gray-200 text-gray-700 font-medium hover:bg-gray-100'
                      }`}
                    >
                      <span className="truncate">{opt.label}</span>
                      {opt.icon}
                    </button>
                  )
                })}
              </div>
            </div>

            {/* Filtro de Endereço e Raio de Distância */}
            <form onSubmit={handleBuscarEndereco} className="mb-4 space-y-2.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-gray-500">
                Filtrar por proximidade
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search size={18} className="text-gray-400" />
                </div>
                <input
                  type="text"
                  value={enderecoInput}
                  onChange={(e) => setEnderecoInput(e.target.value)}
                  placeholder="Digite seu bairro, cidade ou CEP..."
                  className="w-full bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-full focus:ring-primary focus:border-primary block pl-10 pr-24 p-2.5"
                />
                <button
                  type="submit"
                  disabled={buscandoEndereco}
                  className="absolute right-1.5 top-1.5 bottom-1.5 px-4 bg-primary text-white text-xs font-bold rounded-full hover:bg-green-800 transition-colors"
                >
                  {buscandoEndereco ? '...' : 'Buscar'}
                </button>
              </div>

              <div className="flex items-center justify-between gap-2">
                <button
                  type="button"
                  onClick={handleUsarMinhaLocalizacao}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-primary hover:text-green-800 transition-colors"
                >
                  <Navigation size={13} />
                  Usar minha localização atual
                </button>

                {userLocation && (
                  <button
                    type="button"
                    onClick={handleLimparFiltroLocalizacao}
                    className="inline-flex items-center gap-1 text-xs font-semibold text-gray-500 hover:text-gray-800 transition-colors"
                  >
                    <RotateCcw size={12} />
                    Limpar local
                  </button>
                )}
              </div>

              {userLocation && (
                <div className="pt-1">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>Raio de distância:</span>
                    <strong>{distanciaKm} km</strong>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={60}
                    step={1}
                    value={distanciaKm}
                    onChange={(e) => setDistanciaKm(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>
              )}
            </form>
          </div>

          <div className="pt-3 border-t border-gray-100">
            <p className="text-xs font-medium text-gray-500 mb-1">
              Conhece algum cursinho que não está nesse mapa?
            </p>
            <a
              href="https://www.instagram.com/semeandoeducacao/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-primary font-bold hover:text-green-800 transition-colors"
            >
              Entre em contato conosco
            </a>
          </div>
        </div>

        {/* Coluna Direita: Mapa ocupando toda a área direita */}
        <div className="w-full lg:w-8/12 xl:w-9/12 flex flex-col min-h-[500px] lg:min-h-0 lg:h-full">
          <div
            id="vttMapOverview"
            ref={mapContainerRef}
            className="w-full flex-1 min-h-[500px] lg:min-h-0 lg:h-full z-0"
          />
        </div>
      </div>
    </div>
  )
}
