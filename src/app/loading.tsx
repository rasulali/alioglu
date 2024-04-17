const Loading = () => {
  return (
    <div className="h-screen flex bg-grayA items-center overflow-hidden justify-center">
      <div className="relative lg:mb-96 sm:mb-32 mb-16">
        <svg
          className="w-[300px] sm:w-[500px] lg:w-[700px] animate-rotateY duration-100 fill-zinc-100"
          viewBox="0 0 2000 2000"
          fill="none"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M814.599 1006.8L740.624 894.476L676.828 991.345L625.983 1068.55L378.389 1444.49L342 1499.74H909.965L873.576 1444.49L845.872 1402.42L748.642 1254.79L726.326 1288.67L652.373 1400.96H694.451L747.365 1320.62L801.241 1402.42L828.945 1444.49H665.785H623.707H526.338L775.341 1075.04L999.804 1415.86L1055.05 1499.74H1658.85L1622.46 1444.49L1074.4 612.322L1000.42 500L927.716 610.4L888.79 669.504L849.865 728.607L834.529 751.894L810.939 787.711L884.914 900.033L1081.51 1198.54L1179.63 1347.53H1226.81L1105.1 1162.72L908.503 864.216L923.84 840.929L962.765 781.825L1001.69 722.722L1477.04 1444.49H1321.34H1102.86L814.599 1006.8Z"
          />
        </svg>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
          <svg
            viewBox="0 0 2000 300"
            className="fill-zinc-100 w-[300px] sm:w-[500px]  lg:w-[1000px]"
          >
            <g id="A" className="opacity-0 animate-appear animate-delay-100">
              <path d="M267.732 228.199H343.514V225.64C338.756 225.097 335.176 224.477 332.777 223.779C330.417 223.042 328.294 221.995 326.446 220.637C323.85 218.66 321.412 215.751 319.21 211.873C316.968 207.995 313.98 201.557 310.204 192.521L300.318 169.012H274.268L284.012 192.676L285.979 197.447C288.142 202.682 289.204 206.831 289.204 209.934C289.204 215.169 286.805 219.28 282.046 222.227C279.372 223.895 274.575 225.019 267.732 225.64V228.199Z" />
              <path d="M216.135 181.546L220.938 169.012H215.604L211.18 180.267C207.366 190.04 204.259 197.369 201.939 202.255C199.579 207.142 197.18 211.175 194.702 214.277C191.792 218.117 188.804 220.948 185.736 222.693C182.63 224.438 179.09 225.407 175 225.64V228.199H226.675V225.64C221.956 225.252 218.102 224.05 215.074 221.995C212.911 220.482 211.219 218.504 209.961 216.1C208.663 213.657 208.035 211.059 208.035 208.228C208.035 203.458 209.765 196.903 213.225 188.566L216.135 181.546Z" />
              <path d="M253.338 73L229.325 134.1H234.555L246.967 102.241L260.04 134.1H285.637L259.945 73H253.338Z" />
            </g>

            <g id="L" className="opacity-0 animate-appear animate-delay-200">
              <path d="M449 225.64V228.199H586.21L587.861 181.585L585.03 181.353C583.574 188.411 581.962 194.112 580.271 198.416C578.541 202.759 576.299 206.638 573.625 210.05C569.653 215.053 564.501 218.737 558.248 221.141C551.995 223.507 544.287 224.709 535.164 224.709C526.394 224.709 519.394 223.429 514.085 220.909C508.776 218.349 504.804 214.355 502.13 208.887C500.596 205.784 499.535 201.751 498.984 196.826C498.473 191.901 498.197 184.377 498.197 174.295V169.012H473.186V192.599C473.186 200.355 472.753 206.094 471.848 209.856C470.983 213.618 469.332 216.72 466.972 219.163C462.725 223.468 456.747 225.64 449 225.64Z" />
              <path d="M473.186 108.678V134.1H498.197V108.678C498.197 100.689 498.669 94.8339 499.574 91.0332C500.518 87.2328 502.287 84.0912 504.882 81.5703C506.967 79.6315 509.326 78.1581 512.001 77.2663C514.714 76.3743 518.175 75.792 522.383 75.5592V73H449V75.5592C453.129 75.7146 456.551 76.2577 459.186 77.1497C461.821 78.0805 464.22 79.5151 466.382 81.4928C469.017 83.8974 470.786 87.0384 471.73 90.8776C472.714 94.7169 473.186 100.65 473.186 108.678Z" />
            </g>

            <g id="I" className="opacity-0 animate-appear animate-delay-300">
              <path d="M766.383 75.5592V73H693V75.5592C697.366 75.792 700.944 76.4127 703.697 77.3822C706.489 78.3516 708.888 79.9421 710.972 82.1523C713.411 84.5958 715.062 87.659 715.927 91.3822C716.753 95.105 717.186 100.844 717.186 108.678V134.1H742.197V108.678C742.197 103.442 742.433 98.828 742.905 94.7949C743.574 89.4045 745.422 85.1774 748.411 82.1523C750.574 79.9421 753.012 78.3516 755.725 77.3822C758.478 76.4127 762.018 75.792 766.383 75.5592Z" />
              <path d="M742.197 192.521V169.012H717.186V192.521C717.186 200.355 716.753 206.094 715.927 209.817C715.062 213.54 713.411 216.604 710.972 219.048C708.888 221.18 706.489 222.731 703.775 223.779C701.023 224.787 697.444 225.407 693 225.64V228.199H766.383V225.64C761.153 225.33 756.984 224.438 753.838 222.964C750.691 221.49 748.096 219.241 746.13 216.178C744.715 214.006 743.731 211.059 743.102 207.452C742.512 203.806 742.197 198.843 742.197 192.521Z" />
            </g>

            <g
              id="O"
              className="opacity-0 animate-appear animate-delay-[400ms]"
            >
              <path d="M878.439 116.118C875.522 121.833 873.377 127.815 872 134.055H899.359C900.183 128.527 901.376 123.178 902.939 118.019C906.243 107.083 910.963 97.853 917.019 90.3685C922.092 84.0472 927.597 79.5098 933.575 76.7174C939.513 73.8866 946.592 72.4902 954.732 72.4902C962.952 72.4902 970.109 73.9253 976.126 76.7565C982.182 79.5874 987.649 84.1248 992.565 90.3685C998.661 97.9306 1003.34 107.16 1006.68 118.057C1008.27 123.24 1009.49 128.573 1010.33 134.055H1037.92C1035.16 121.071 1028.95 109.169 1019.27 98.3184C1010.97 89.0109 1001.29 81.7975 990.244 76.6784C979.154 71.5595 967.71 69 955.873 69C946.592 69 937.389 70.629 928.227 73.8477C919.103 77.0663 910.569 81.6426 902.626 87.6536C892.047 95.7588 883.985 105.221 878.439 116.118Z" />
              <path d="M1034.25 178.128C1035.43 175.11 1036.42 172.057 1037.21 168.968H1010.54C1008.25 184.211 1002.58 197.49 993.508 208.803C987.964 215.629 982.143 220.554 976.008 223.618C969.913 226.643 962.794 228.155 954.732 228.155C946.749 228.155 939.67 226.604 933.575 223.54C927.44 220.477 921.659 215.551 916.193 208.803C907.069 197.476 901.381 184.203 899.113 168.968H872.061C872.869 172.543 873.932 176.062 875.254 179.524C878.676 188.521 883.591 196.51 889.962 203.568C898.024 212.604 907.62 219.546 918.788 224.471C929.918 229.396 941.598 231.878 953.828 231.878C966.177 231.878 978.053 229.358 989.379 224.277C1000.71 219.197 1010.5 212.023 1018.79 202.793C1025.56 195.347 1030.71 187.125 1034.25 178.128Z" />
            </g>

            <g id="G" className="opacity-0 animate-appear animate-delay-500">
              <path d="M1282.17 122.517L1280.75 72.9557H1277.69C1276.07 77.8808 1273.75 80.3626 1270.69 80.3626C1269.27 80.3626 1267.74 80.0143 1266.05 79.3548L1259.28 76.252C1253.38 73.6925 1247.8 71.8312 1242.53 70.7064C1237.26 69.5816 1231.6 69 1225.42 69C1214.84 69 1204.82 70.6678 1195.3 74.0033C1185.78 77.3383 1177.37 82.0693 1170.09 88.1966C1161.2 95.7587 1154.28 105.376 1149.37 117.049C1147.06 122.514 1145.3 128.183 1144.09 134.055H1171.62C1174.13 120.296 1179.31 107.663 1187.16 96.1465C1192.82 87.8864 1198.96 81.9138 1205.52 78.2298C1212.09 74.5456 1219.96 72.7227 1229.08 72.7227C1240.84 72.7227 1250.87 76.8336 1259.16 85.0938C1267.46 93.3153 1274.27 105.88 1279.57 122.75L1282.17 122.517Z" />
              <path d="M1174.02 183.519C1172.6 178.828 1171.54 173.977 1170.85 168.968H1143C1143.68 173.72 1144.72 178.336 1146.1 182.821C1148.81 191.585 1152.71 199.148 1157.78 205.508C1164.54 214.001 1173.35 220.515 1184.25 225.053C1195.1 229.59 1207.29 231.878 1220.82 231.878C1230.65 231.878 1239.97 230.676 1248.82 228.271C1257.63 225.867 1265.42 222.416 1272.1 217.917C1274.7 216.211 1276.86 215.319 1278.55 215.319C1279.93 215.319 1282.05 215.862 1285 216.909L1284.76 214.311C1284.45 208.571 1284.29 204.305 1284.29 201.59C1284.29 191.702 1285.04 185.07 1286.5 181.735C1287.79 178.71 1289.8 176.577 1292.51 175.336C1295.23 174.095 1299.98 173.165 1306.71 172.544V169.984H1233.33V172.544C1242.77 172.544 1249.49 174.211 1253.62 177.546C1257.71 180.881 1259.75 186.273 1259.75 193.757C1259.75 201.862 1257.47 208.881 1252.95 214.776C1249.65 219.003 1245.44 222.338 1240.29 224.743C1235.14 227.186 1229.63 228.388 1223.81 228.388C1208.98 228.388 1196.4 221.562 1186.1 207.911C1180.79 200.854 1176.77 192.748 1174.02 183.519Z" />
            </g>

            <g
              id="L_2"
              className="opacity-0 animate-appear animate-delay-[600ms]"
            >
              <path d="M1412 225.64V228.199H1549.21L1550.86 181.585L1548.03 181.353C1546.57 188.411 1544.96 194.112 1543.27 198.416C1541.54 202.759 1539.3 206.638 1536.63 210.05C1532.65 215.053 1527.5 218.737 1521.25 221.141C1515 223.507 1507.29 224.709 1498.16 224.709C1489.39 224.709 1482.39 223.429 1477.09 220.909C1471.78 218.349 1467.8 214.355 1465.13 208.887C1463.6 205.784 1462.53 201.751 1461.98 196.826C1461.47 191.901 1461.2 184.377 1461.2 174.295V169.012H1436.19V192.599C1436.19 200.355 1435.75 206.094 1434.85 209.856C1433.98 213.618 1432.33 216.72 1429.97 219.163C1425.72 223.468 1419.75 225.64 1412 225.64Z" />
              <path d="M1436.19 108.678V134.1H1461.2V108.678C1461.2 100.689 1461.67 94.8339 1462.57 91.0332C1463.52 87.2328 1465.29 84.0912 1467.88 81.5703C1469.97 79.6315 1472.33 78.1581 1475 77.2663C1477.71 76.3743 1481.17 75.792 1485.38 75.5592V73H1412V75.5592C1416.13 75.7146 1419.55 76.2577 1422.19 77.1497C1424.82 78.0805 1427.22 79.5151 1429.38 81.4928C1432.02 83.8974 1433.79 87.0384 1434.73 90.8776C1435.71 94.7169 1436.19 100.65 1436.19 108.678Z" />
            </g>

            <g id="U" className="opacity-0 animate-appear animate-delay-700">
              <path
                id="U"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M1729.46 71V73.5592C1725.06 73.792 1721.48 74.4127 1718.69 75.3822C1715.93 76.3516 1713.5 77.9421 1711.45 80.1523C1708.89 82.7118 1707.2 85.892 1706.42 89.6927C1705.59 93.493 1705.2 100.008 1705.2 109.238V132.1H1680.19V106.639C1680.19 98.8055 1679.75 93.0659 1678.93 89.3431C1678.06 85.6588 1676.41 82.5569 1673.97 80.1523C1671.89 77.9421 1669.49 76.3516 1666.78 75.3822C1664.02 74.3738 1660.44 73.792 1656 73.5592V71H1729.46ZM1705.2 167.012V173.574C1705.2 184.045 1705.59 191.607 1706.42 196.261C1707.2 200.914 1708.85 205.219 1711.33 209.136C1715.03 215.147 1719.59 219.491 1724.98 222.167C1730.41 224.843 1737.25 226.199 1745.51 226.199C1753.49 226.199 1761.12 224.997 1768.39 222.632C1775.67 220.227 1781.73 216.931 1786.6 212.665C1789.59 210.028 1791.79 207.158 1793.21 204.017C1794.66 200.914 1795.61 196.998 1796.04 192.228C1796.36 189.125 1796.51 181.757 1796.51 170.161V167.012H1801.23V178.344C1801.23 188.932 1800.41 196.766 1798.75 201.807C1797.1 206.848 1793.84 211.424 1788.92 215.612C1777.72 225.152 1761.71 229.923 1740.87 229.923C1719.16 229.923 1703.15 225.424 1692.85 216.388C1686.16 210.648 1682.19 203.048 1680.89 193.663C1680.42 190.328 1680.19 184.316 1680.19 175.59V167.012H1705.2ZM1796.51 132.1V106.639C1796.51 98.8444 1796.08 93.0659 1795.18 89.3431C1794.31 85.6588 1792.66 82.5958 1790.26 80.1523C1788.14 77.9421 1785.7 76.3516 1782.95 75.3822C1780.23 74.4127 1776.65 73.792 1772.29 73.5592V71H1825.42V73.5592C1821.05 73.792 1817.51 74.3738 1814.76 75.3822C1812.05 76.3516 1809.61 77.9421 1807.45 80.1523C1805.09 82.5569 1803.43 85.6588 1802.57 89.4206C1801.66 93.1438 1801.23 98.8829 1801.23 106.639V132.1H1796.51Z"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};
export default Loading;
