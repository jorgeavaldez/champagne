import { Container, Row } from "react-bootstrap";
import styles from './Home.module.css';

export default function GetStarted() {
    return (
        <Container fluid >
            <Row className="d-flex justify-content-center align-items-center">
                <svg width="1255" height="264" viewBox="0 0 1255 264" fill="none" xmlns="http://www.w3.org/2000/svg" href="/login">
                    <rect width="1255" height="264" fill="black" />
                    <path d="M992.537 63.9H1049.74V105H1031.04V97.7C1028.04 100.3 1024.44 102.233 1020.24 103.5C1016.1 104.7 1010.07 105.3 1002.14 105.3C996.203 105.3 990.803 104.933 985.937 104.2C981.137 103.4 977.003 102.267 973.537 100.8C970.07 99.3333 967.07 97.6 964.537 95.6C962.07 93.5333 960.07 91.2 958.537 88.6C957.07 85.9333 955.97 83.1333 955.237 80.2C954.57 77.2667 954.237 74.0333 954.237 70.5C954.237 65.6333 955.07 61.2 956.737 57.2C958.403 53.1333 960.67 49.7 963.537 46.9C966.47 44.1 969.903 41.7333 973.837 39.8C977.837 37.8667 982.137 36.4667 986.737 35.6C991.403 34.6667 996.337 34.2 1001.54 34.2C1008.67 34.2 1014.8 34.6333 1019.94 35.5C1025.14 36.3667 1029.44 37.7 1032.84 39.5C1036.3 41.3 1039.1 43.3667 1041.24 45.7C1043.44 47.9667 1045.37 50.8 1047.04 54.2L1025.24 61.5C1021.84 56.6333 1013.87 54.2 1001.34 54.2C996.537 54.2 992.537 54.6 989.337 55.4C986.137 56.2 983.703 57.4 982.037 59C980.37 60.5333 979.203 62.2333 978.537 64.1C977.87 65.9667 977.537 68.2 977.537 70.8C977.537 73.2 977.837 75.2667 978.437 77C979.037 78.6667 980.137 80.2333 981.737 81.7C983.403 83.1667 985.87 84.3 989.137 85.1C992.403 85.8333 996.47 86.2 1001.34 86.2C1004.74 86.2 1007.64 86.0667 1010.04 85.8C1012.44 85.4667 1014.37 84.9667 1015.84 84.3C1017.3 83.6333 1018.34 83.0667 1018.94 82.6C1019.6 82.1333 1020.44 81.4 1021.44 80.4H992.537V63.9ZM1056.3 34.8H1133.8V54.3H1079.6V60.5H1130.4V79.2H1079.6V85.5H1133.8V105H1056.3V34.8ZM1140.08 34.8H1232.78V58H1198.08V105H1174.88V58H1140.08V34.8ZM644.993 141C650.393 141 655.06 141.133 658.993 141.4C662.993 141.6 666.626 141.967 669.893 142.5C673.226 142.967 675.993 143.667 678.193 144.6C680.393 145.533 682.293 146.633 683.893 147.9C685.493 149.1 686.726 150.633 687.593 152.5C688.526 154.367 689.193 156.4 689.593 158.6C689.993 160.8 690.193 163.4 690.193 166.4H665.393C665.393 165.333 665.193 164.5 664.793 163.9C664.46 163.3 663.66 162.733 662.393 162.2C661.126 161.6 659.126 161.2 656.393 161C653.66 160.733 650.06 160.6 645.593 160.6C639.66 160.6 635.326 160.733 632.593 161C629.86 161.267 628.126 161.6 627.393 162C626.66 162.4 626.293 163.1 626.293 164.1C626.36 164.967 627.26 165.567 628.993 165.9C630.793 166.167 636.126 166.667 644.993 167.4C645.126 167.4 645.226 167.433 645.293 167.5C662.893 168.9 674.06 170.167 678.793 171.3C684.993 172.767 688.993 175.267 690.793 178.8C691.993 181.2 692.593 184.667 692.593 189.2C692.593 192.4 692.36 195.033 691.893 197.1C691.493 199.167 690.626 201.067 689.293 202.8C688.026 204.533 686.36 205.9 684.293 206.9C682.226 207.833 679.36 208.633 675.693 209.3C672.026 209.967 667.826 210.433 663.093 210.7C658.426 210.9 652.593 211 645.593 211C640.793 211 636.626 210.933 633.093 210.8C629.626 210.667 626.36 210.433 623.293 210.1C620.293 209.767 617.793 209.333 615.793 208.8C613.793 208.267 611.993 207.533 610.393 206.6C608.793 205.667 607.526 204.667 606.593 203.6C605.726 202.467 604.993 201.033 604.393 199.3C603.793 197.567 603.393 195.733 603.193 193.8C602.993 191.867 602.893 189.567 602.893 186.9H626.993C626.993 188.433 627.393 189.533 628.193 190.2C629.06 190.8 630.826 191.267 633.493 191.6C636.226 191.867 640.626 192 646.693 192C647.226 192 648.026 192 649.093 192C656.693 192 661.293 191.867 662.893 191.6C664.56 191.333 665.393 190.467 665.393 189C665.393 188.133 664.826 187.567 663.693 187.3C662.56 187.033 659.426 186.733 654.293 186.4C650.56 186.133 647.46 185.9 644.993 185.7C640.526 185.3 637.126 185 634.793 184.8C632.526 184.533 629.693 184.2 626.293 183.8C622.96 183.4 620.426 182.967 618.693 182.5C617.026 182.033 615.06 181.433 612.793 180.7C610.593 179.9 608.96 179.033 607.893 178.1C606.893 177.1 605.826 175.933 604.693 174.6C603.626 173.2 602.893 171.633 602.493 169.9C602.093 168.1 601.893 166.1 601.893 163.9C601.893 161.233 602.06 158.9 602.393 156.9C602.793 154.9 603.426 153.133 604.293 151.6C605.226 150 606.226 148.633 607.293 147.5C608.426 146.367 609.926 145.4 611.793 144.6C613.726 143.8 615.693 143.167 617.693 142.7C619.693 142.233 622.193 141.867 625.193 141.6C628.26 141.333 631.26 141.167 634.193 141.1C637.126 141.033 640.726 141 644.993 141ZM695.545 140.8H788.245V164H753.545V211H730.345V164H695.545V140.8ZM842.126 141L873.626 211H846.626L841.326 199.2H806.626L801.326 211H774.426L805.926 141H842.126ZM814.926 179H833.026L823.926 160.6L814.926 179ZM956.935 166.6C956.935 177.667 952.635 185.567 944.035 190.3L958.435 211L931.535 210.9L919.535 194.4H898.435V211H875.135V140.8H898.435H926.735C928.068 140.8 929.335 140.833 930.535 140.9C931.735 140.967 933.402 141.2 935.535 141.6C937.735 141.933 939.702 142.433 941.435 143.1C943.235 143.7 945.135 144.667 947.135 146C949.135 147.267 950.802 148.8 952.135 150.6C953.535 152.333 954.668 154.567 955.535 157.3C956.468 160.033 956.935 163.133 956.935 166.6ZM924.535 173.9C930.335 173.9 933.235 171.7 933.235 167.3C933.235 163.3 930.202 161.3 924.135 161.3H898.435V173.9H924.535ZM961.268 140.8H1053.97V164H1019.27V211H996.068V164H961.268V140.8ZM1060.69 140.8H1138.19V160.3H1083.99V166.5H1134.79V185.2H1083.99V191.5H1138.19V211H1060.69V140.8ZM1192.86 141C1193.93 141 1195.23 141.1 1196.76 141.3C1198.36 141.433 1200.46 141.8 1203.06 142.4C1205.73 142.933 1208.33 143.7 1210.86 144.7C1213.4 145.633 1216.03 147 1218.76 148.8C1221.5 150.6 1223.86 152.7 1225.86 155.1C1227.86 157.433 1229.5 160.4 1230.76 164C1232.1 167.6 1232.76 171.6 1232.76 176C1232.76 180.4 1232.2 184.4 1231.06 188C1230 191.6 1228.6 194.6 1226.86 197C1225.13 199.333 1223.03 201.4 1220.56 203.2C1218.1 205 1215.66 206.4 1213.26 207.4C1210.93 208.333 1208.4 209.1 1205.66 209.7C1202.93 210.233 1200.63 210.6 1198.76 210.8C1196.9 210.933 1195.03 211 1193.16 211H1144.86V141H1168.16H1192.86ZM1191.56 191.9C1195.96 191.9 1199.7 190.367 1202.76 187.3C1205.9 184.167 1207.46 180.433 1207.46 176.1C1207.46 171.7 1205.9 167.967 1202.76 164.9C1199.7 161.767 1195.96 160.2 1191.56 160.2H1168.16V191.9H1191.56Z" fill="white" />
                    <rect x="620" y="51" width="268" height="36" fill="white" />
                    <path d="M879 29L936 66.1014L879 103.203V109V29Z" fill="white" />
                    <circle cx="47" cy="48" r="10" fill="white" />
                    <circle cx="87" cy="48" r="10" fill="white" />
                    <circle cx="127" cy="48" r="10" fill="white" />
                    <circle cx="167" cy="48" r="10" fill="white" />
                    <circle cx="207" cy="48" r="10" fill="white" />
                    <circle cx="247" cy="48" r="10" fill="white" />
                    <circle cx="287" cy="48" r="10" fill="white" />
                    <circle cx="327" cy="48" r="10" fill="white" />
                    <circle cx="367" cy="48" r="10" fill="white" />
                    <circle cx="407" cy="48" r="10" fill="white" />
                    <circle cx="47" cy="88" r="10" fill="white" />
                    <circle cx="87" cy="88" r="10" fill="white" />
                    <circle cx="127" cy="88" r="10" fill="white" />
                    <circle cx="167" cy="88" r="10" fill="white" />
                    <circle cx="207" cy="88" r="10" fill="white" />
                    <circle cx="247" cy="88" r="10" fill="white" />
                    <circle cx="287" cy="88" r="10" fill="white" />
                    <circle cx="327" cy="88" r="10" fill="white" />
                    <circle cx="367" cy="88" r="10" fill="white" />
                    <circle cx="407" cy="88" r="10" fill="white" />
                    <circle cx="47" cy="128" r="10" fill="white" />
                    <circle cx="87" cy="128" r="10" fill="white" />
                    <circle cx="127" cy="128" r="10" fill="white" />
                    <circle cx="167" cy="128" r="10" fill="white" />
                    <circle cx="207" cy="128" r="10" fill="white" />
                    <circle cx="247" cy="128" r="10" fill="white" />
                    <circle cx="287" cy="128" r="10" fill="white" />
                    <circle cx="327" cy="128" r="10" fill="white" />
                    <circle cx="367" cy="128" r="10" fill="white" />
                    <circle cx="407" cy="128" r="10" fill="white" />
                    <circle cx="47" cy="171" r="10" fill="white" />
                    <circle cx="87" cy="171" r="10" fill="white" />
                    <circle cx="127" cy="171" r="10" fill="white" />
                    <circle cx="167" cy="171" r="10" fill="white" />
                    <circle cx="207" cy="171" r="10" fill="white" />
                    <circle cx="247" cy="171" r="10" fill="white" />
                    <circle cx="287" cy="171" r="10" fill="white" />
                    <circle cx="327" cy="171" r="10" fill="white" />
                    <circle cx="367" cy="171" r="10" fill="white" />
                    <circle cx="407" cy="171" r="10" fill="white" />
                    <circle cx="47" cy="211" r="10" fill="white" />
                    <circle cx="87" cy="211" r="10" fill="white" />
                    <circle cx="127" cy="211" r="10" fill="white" />
                    <circle cx="167" cy="211" r="10" fill="white" />
                    <circle cx="207" cy="211" r="10" fill="white" />
                    <circle cx="247" cy="211" r="10" fill="white" />
                    <circle cx="287" cy="211" r="10" fill="white" />
                    <circle cx="327" cy="211" r="10" fill="white" />
                    <circle cx="367" cy="211" r="10" fill="white" />
                    <circle cx="407" cy="211" r="10" fill="white" />
                    <circle cx="447" cy="48" r="10" fill="white" />
                    <circle cx="447" cy="88" r="10" fill="white" />
                    <circle cx="447" cy="128" r="10" fill="white" />
                    <circle cx="447" cy="171" r="10" fill="white" />
                    <circle cx="447" cy="211" r="10" fill="white" />
                    <circle cx="487" cy="48" r="10" fill="white" />
                    <circle cx="487" cy="88" r="10" fill="white" />
                    <circle cx="487" cy="128" r="10" fill="white" />
                    <circle cx="487" cy="171" r="10" fill="white" />
                    <circle cx="487" cy="211" r="10" fill="white" />
                    <circle cx="527" cy="48" r="10" fill="white" />
                    <circle cx="527" cy="88" r="10" fill="white" />
                    <circle cx="527" cy="128" r="10" fill="white" />
                    <circle cx="527" cy="171" r="10" fill="white" />
                    <circle cx="527" cy="211" r="10" fill="white" />
                    <circle cx="567" cy="48" r="10" fill="white" />
                    <circle cx="567" cy="88" r="10" fill="white" />
                    <circle cx="567" cy="128" r="10" fill="white" />
                    <circle cx="567" cy="171" r="10" fill="white" />
                    <circle cx="567" cy="211" r="10" fill="white" />
                </svg>
            </Row>
        </Container>
    )
}
