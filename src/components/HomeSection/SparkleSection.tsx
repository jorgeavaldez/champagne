import { Row, Col } from "react-bootstrap";

import styles from './HomeSection.module.css';

export default function SparkleSection() {
    return (
        <div className={styles.rightContainer}>
            <Row className={`${styles.sectionContainer} ${styles.rightSectionContainer}`}>
                <Col lg={3} sm={12} className="d-flex justify-content-center">
                    <svg width="78" height="84" viewBox="0 0 78 84" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M33 61.9999L32.9976 61.9999L32.9904 62.0001L32.9784 62.0005L32.9616 62.0013L32.9401 62.0025L32.9138 62.0044L32.8827 62.0071L32.847 62.0106L32.8065 62.0152L32.7614 62.0208L32.7116 62.0277L32.6573 62.0359L32.5984 62.0457L32.5349 62.057L32.467 62.07L32.3947 62.0848L32.318 62.1016L32.237 62.1204L32.1517 62.1414L32.0621 62.1646L31.9685 62.1902L31.8707 62.2182L31.769 62.2487L31.6633 62.282L31.5537 62.3179L31.4403 62.3567L31.3232 62.3984L31.2025 62.4431L31.0782 62.4909L30.9505 62.5419L30.8193 62.5961L30.6849 62.6536L30.5473 62.7145L30.4065 62.7788L30.2628 62.8466L30.1161 62.918L29.9666 62.993L29.8143 63.0716L29.6595 63.154L29.5022 63.2401L29.3424 63.33L29.1803 63.4237L29.0161 63.5213L28.8497 63.6227L28.6814 63.7281L28.5112 63.8374L28.3392 63.9506L28.1656 64.0678L27.9905 64.1889L27.8139 64.314L27.6361 64.4431L27.457 64.5761L27.2769 64.7131L27.0958 64.8539L26.9138 64.9987L26.7311 65.1474L26.5478 65.2999L26.364 65.4563L26.1797 65.6164L25.9952 65.7804L25.8105 65.948L25.6258 66.1193L25.4411 66.2942L25.2565 66.4726L25.0723 66.6546L24.8884 66.84L24.705 67.0287L24.5222 67.2208L24.34 67.4161L24.1587 67.6145L23.9783 67.816L23.7989 68.0205L23.6205 68.2279L23.4434 68.438L23.2676 68.6509L23.0931 68.8663L22.9201 69.0843L22.7487 69.3047L22.5789 69.5273L22.4109 69.7521L22.2447 69.979L22.0804 70.2078L21.918 70.4385L21.7577 70.6709L21.5996 70.9048L21.4436 71.1402L21.2899 71.3769L21.1385 71.6148L20.9895 71.8537L20.843 72.0936L20.699 72.3343L20.5575 72.5756L20.4187 72.8174L20.2825 73.0596L20.149 73.302L20.0183 73.5445L19.8904 73.7869L19.7652 74.0291L19.643 74.2709L19.5236 74.5123L19.4072 74.7529L19.2937 74.9928L19.1831 75.2317L19.0756 75.4695L18.971 75.706L18.8694 75.9412L18.7708 76.1748L18.6753 76.4066L18.5827 76.6367L18.4932 76.8647L18.4067 77.0905L18.3232 77.3141L18.2427 77.5353L18.1651 77.7538L18.0905 77.9696L18.0189 78.1826L17.9502 78.3925L17.8843 78.5993L17.8214 78.8028L17.7612 79.0029L17.7039 79.1994L17.6493 79.3922L17.5974 79.5812L17.5482 79.7662L17.5016 79.9472L17.4576 80.124L17.4161 80.2965L17.3771 80.4645L17.3405 80.628L17.3062 80.7868L17.2743 80.9409L17.2445 81.0901L17.217 81.2343L17.1915 81.3734L17.168 81.5074L17.1465 81.6361L17.1269 81.7595L17.1091 81.8774L17.093 81.9898L17.0785 82.0966L17.0656 82.1978L17.0542 82.2932L17.0442 82.3828L17.0355 82.4665L17.028 82.5443L17.0216 82.6161L17.0163 82.6819L17.0119 82.7416L17.0084 82.7952L17.0056 82.8426L17.0036 82.8838L17.0021 82.9189L17.0011 82.9476L17.0004 82.9702L17.0001 82.9864L17 82.9963L17 83L17 82.9974L16.9999 82.9884L16.9996 82.9732L16.999 82.9516L16.9981 82.9239L16.9967 82.8898L16.9947 82.8496L16.992 82.8031L16.9887 82.7505L16.9844 82.6918L16.9793 82.627L16.9731 82.5561L16.9657 82.4793L16.9572 82.3965L16.9474 82.3078L16.9362 82.2133L16.9236 82.1131L16.9094 82.0072L16.8935 81.8957L16.876 81.7786L16.8566 81.6561L16.8355 81.5283L16.8123 81.3951L16.7872 81.2568L16.7599 81.1134L16.7306 80.965L16.699 80.8117L16.6651 80.6536L16.6288 80.4908L16.5902 80.3235L16.5491 80.1518L16.5055 79.9757L16.4593 79.7953L16.4106 79.6109L16.3591 79.4225L16.3049 79.2303L16.248 79.0344L16.1883 78.8349L16.1258 78.6319L16.0604 78.4257L15.9922 78.2162L15.921 78.0037L15.8469 77.7884L15.7698 77.5702L15.6898 77.3495L15.6067 77.1263L15.5207 76.9008L15.4317 76.6731L15.3396 76.4434L15.2445 76.2118L15.1465 75.9785L15.0454 75.7436L14.9412 75.5073L14.8342 75.2696L14.7241 75.0309L14.611 74.7912L14.495 74.5506L14.3761 74.3094L14.2544 74.0676L14.1297 73.8255L14.0022 73.5831L13.8719 73.3406L13.7389 73.0982L13.6031 72.856L13.4647 72.6141L13.3237 72.3727L13.18 72.1319L13.0339 71.8919L12.8853 71.6528L12.7343 71.4147L12.581 71.1778L12.4254 70.9422L12.2675 70.708L12.1076 70.4754L11.9456 70.2445L11.7816 70.0153L11.6157 69.7881L11.4479 69.563L11.2784 69.34L11.1072 69.1192L10.9345 68.9009L10.7603 68.685L10.5846 68.4717L10.4077 68.2611L10.2296 68.0533L10.0503 67.8484L9.87003 67.6464L9.68884 67.4475L9.50684 67.2517L9.32413 67.0591L9.14081 66.8698L8.95699 66.6839L8.77277 66.5014L8.58827 66.3224L8.40359 66.1469L8.21884 65.975L8.03414 65.8068L7.84959 65.6423L7.66531 65.4815L7.48141 65.3246L7.298 65.1714L7.11519 65.0221L6.93311 64.8767L6.75186 64.7352L6.57156 64.5976L6.39232 64.464L6.21425 64.3343L6.03748 64.2086L5.86211 64.0868L5.68825 63.969L5.51603 63.8552L5.34554 63.7452L5.1769 63.6392L5.01023 63.5372L4.84563 63.439L4.68321 63.3446L4.52307 63.2541L4.36533 63.1674L4.21008 63.0845L4.05743 63.0052L3.90749 62.9297L3.76036 62.8577L3.61612 62.7893L3.47489 62.7245L3.33675 62.6631L3.2018 62.605L3.07013 62.5503L2.94183 62.4988L2.81698 62.4506L2.69568 62.4054L2.57801 62.3632L2.46404 62.3239L2.35386 62.2875L2.24753 62.2539L2.14514 62.2229L2.04676 62.1945L1.95244 62.1685L1.86226 62.1449L1.77628 62.1236L1.69456 62.1045L1.61716 62.0874L1.54412 62.0722L1.47551 62.0589L1.41136 62.0474L1.35173 62.0374L1.29665 62.0289L1.24616 62.0218L1.2003 62.016L1.1591 62.0113L1.12258 62.0076L1.09079 62.0048L1.06372 62.0028L1.04142 62.0014L1.02388 62.0006L1.01113 62.0001L1.00316 62L1 61.9999L1.00164 61.9999L1.00807 61.9998L1.0193 61.9994L1.03531 61.9987L1.0561 61.9975L1.08165 61.9957L1.11194 61.9932L1.14696 61.9898L1.18667 61.9855L1.23105 61.98L1.28006 61.9733L1.33369 61.9653L1.39187 61.9558L1.45459 61.9448L1.52179 61.932L1.59342 61.9175L1.66944 61.901L1.74979 61.8826L1.83442 61.8619L1.92326 61.8391L2.01627 61.8139L2.11337 61.7863L2.21449 61.7561L2.31957 61.7233L2.42853 61.6878L2.5413 61.6495L2.6578 61.6082L2.77796 61.564L2.90168 61.5167L3.02889 61.4663L3.1595 61.4126L3.29341 61.3556L3.43054 61.2953L3.5708 61.2315L3.71409 61.1643L3.86032 61.0935L4.00938 61.0191L4.16117 60.941L4.3156 60.8593L4.47256 60.7738L4.63194 60.6845L4.79365 60.5913L4.95757 60.4944L5.1236 60.3935L5.29162 60.2888L5.46153 60.1801L5.63321 60.0675L5.80656 59.951L5.98146 59.8305L6.1578 59.706L6.33546 59.5776L6.51434 59.4452L6.69432 59.3089L6.87528 59.1686L7.05711 59.0244L7.23969 58.8764L7.42292 58.7245L7.60668 58.5687L7.79086 58.4092L7.97533 58.2458L8.16 58.0788L8.34474 57.9081L8.52946 57.7338L8.71403 57.5559L8.89835 57.3745L9.08231 57.1896L9.2658 57.0014L9.44872 56.8098L9.63095 56.6151L9.81241 56.4171L9.99299 56.2161L10.1726 56.0121L10.3511 55.8052L10.5284 55.5955L10.7045 55.383L10.8792 55.168L11.0524 54.9504L11.2241 54.7304L11.3941 54.5081L11.5624 54.2837L11.7289 54.0571L11.8935 53.8286L12.0562 53.5982L12.2168 53.3661L12.3753 53.1324L12.5317 52.8972L12.6857 52.6607L12.8375 52.423L12.9868 52.1842L13.1338 51.9445L13.2782 51.7039L13.4201 51.4627L13.5593 51.221L13.6959 50.9788L13.8298 50.7364L13.961 50.494L14.0894 50.2515L14.215 50.0093L14.3377 49.7674L14.4575 49.526L14.5744 49.2852L14.6884 49.0452L14.7994 48.8061L14.9075 48.5681L15.0125 48.3314L15.1146 48.096L15.2136 47.8622L15.3097 47.63L15.4027 47.3997L15.4927 47.1713L15.5797 46.9451L15.6637 46.7212L15.7446 46.4996L15.8227 46.2807L15.8977 46.0644L15.9698 45.851L16.039 45.6406L16.1053 45.4333L16.1687 45.2292L16.2293 45.0286L16.2871 44.8315L16.3421 44.6381L16.3945 44.4485L16.4441 44.2628L16.4911 44.0812L16.5355 43.9037L16.5774 43.7306L16.6168 43.5618L16.6538 43.3976L16.6884 43.238L16.7207 43.0832L16.7508 42.9332L16.7787 42.7882L16.8045 42.6482L16.8283 42.5134L16.8501 42.3839L16.87 42.2596L16.8881 42.1408L16.9045 42.0276L16.9192 41.9199L16.9324 41.8178L16.944 41.7215L16.9542 41.631L16.9632 41.5463L16.9709 41.4676L16.9774 41.3948L16.9829 41.328L16.9874 41.2674L16.9911 41.2128L16.9939 41.1644L16.9961 41.1222L16.9977 41.0861L16.9988 41.0564L16.9994 41.0328L16.9998 41.0156L16.9999 41.0047L17 41L17 41.0016L17.0001 41.0096L17.0003 41.0238L17.0008 41.0443L17.0017 41.0711L17.003 41.1042L17.0049 41.1434L17.0074 41.1889L17.0107 41.2405L17.0148 41.2983L17.0198 41.3621L17.0258 41.432L17.0329 41.5079L17.0413 41.5898L17.0509 41.6775L17.0618 41.7711L17.0743 41.8704L17.0882 41.9754L17.1038 42.086L17.121 42.2022L17.1401 42.3238L17.161 42.4509L17.1838 42.5832L17.2086 42.7207L17.2355 42.8633L17.2646 43.0109L17.2958 43.1634L17.3293 43.3207L17.3652 43.4828L17.4034 43.6494L17.4441 43.8204L17.4873 43.9959L17.5331 44.1755L17.5814 44.3593L17.6325 44.547L17.6862 44.7387L17.7427 44.934L17.8019 45.133L17.864 45.3354L17.9289 45.5411L17.9967 45.7501L18.0674 45.9621L18.1411 46.177L18.2176 46.3947L18.2972 46.615L18.3798 46.8378L18.4653 47.063L18.5539 47.2903L18.6455 47.5197L18.7401 47.751L18.8377 47.9841L18.9383 48.2187L19.0419 48.4549L19.1485 48.6923L19.2581 48.9308L19.3707 49.1704L19.4862 49.4108L19.6047 49.652L19.726 49.8937L19.8502 50.1358L19.9772 50.3781L20.1071 50.6206L20.2397 50.863L20.375 51.1053L20.513 51.3473L20.6536 51.5887L20.7969 51.8296L20.9426 52.0698L21.0908 52.309L21.2414 52.5473L21.3944 52.7844L21.5496 53.0202L21.7071 53.2546L21.8667 53.4875L22.0284 53.7187L22.1921 53.9481L22.3577 54.1757L22.5252 54.4011L22.6944 54.6245L22.8653 54.8456L23.0378 55.0643L23.2118 55.2806L23.3872 55.4943L23.564 55.7053L23.7419 55.9136L23.921 56.119L24.1011 56.3215L24.2822 56.5209L24.4641 56.7172L24.6467 56.9103L24.8299 57.1001L25.0136 57.2866L25.1978 57.4696L25.3823 57.6492L25.5669 57.8252L25.7517 57.9977L25.9364 58.1665L26.121 58.3316L26.3053 58.4929L26.4893 58.6505L26.6728 58.8043L26.8557 58.9542L27.0379 59.1002L27.2193 59.2423L27.3997 59.3805L27.5792 59.5148L27.7574 59.6451L27.9344 59.7715L28.11 59.8939L28.2841 60.0123L28.4566 60.1268L28.6274 60.2374L28.7963 60.344L28.9633 60.4467L29.1282 60.5455L29.291 60.6404L29.4515 60.7316L29.6097 60.8189L29.7653 60.9024L29.9184 60.9822L30.0688 61.0584L30.2163 61.1309L30.361 61.1998L30.5028 61.2653L30.6414 61.3272L30.7769 61.3858L30.9091 61.441L31.0379 61.493L31.1633 61.5418L31.2852 61.5875L31.4034 61.6302L31.518 61.6699L31.6288 61.7067L31.7357 61.7408L31.8388 61.7722L31.9378 61.801L32.0328 61.8274L32.1236 61.8513L32.2102 61.873L32.2926 61.8925L32.3707 61.9099L32.4445 61.9253L32.5138 61.9389L32.5787 61.9507L32.639 61.961L32.6948 61.9697L32.746 61.977L32.7927 61.983L32.8346 61.9879L32.8719 61.9917L32.9044 61.9946L32.9322 61.9968L32.9553 61.9982L32.9736 61.9992L32.9871 61.9997L32.9958 61.9999L33 61.9999Z" stroke="white" strokeWidth="4" />
                        <path fillRule="evenodd" clipRule="evenodd" d="M77 33.4999L76.9967 33.4999L76.9868 33.5001L76.9703 33.5008L76.9473 33.502L76.9176 33.5039L76.8815 33.5069L76.8388 33.511L76.7896 33.5165L76.734 33.5235L76.6719 33.5322L76.6035 33.5429L76.5288 33.5556L76.4478 33.5707L76.3606 33.5882L76.2672 33.6083L76.1677 33.6313L76.0622 33.6573L75.9508 33.6864L75.8335 33.7188L75.7104 33.7547L75.5817 33.7943L75.4473 33.8377L75.3073 33.885L75.162 33.9364L75.0113 33.992L74.8555 34.0521L74.6945 34.1166L74.5285 34.1858L74.3576 34.2598L74.1819 34.3387L74.0016 34.4225L73.8167 34.5115L73.6275 34.6057L73.434 34.7053L73.2363 34.8102L73.0346 34.9207L72.829 35.0367L72.6197 35.1584L72.4068 35.2859L72.1905 35.4191L71.9708 35.5583L71.7479 35.7033L71.5221 35.8543L71.2934 36.0114L71.0619 36.1744L70.8279 36.3436L70.5914 36.5188L70.3527 36.7002L70.1119 36.8876L69.8692 37.0812L69.6246 37.281L69.3784 37.4868L69.1307 37.6988L68.8817 37.9168L68.6315 38.1409L68.3803 38.371L68.1282 38.607L67.8754 38.849L67.6221 39.0969L67.3684 39.3506L67.1145 39.61L66.8604 39.8751L66.6065 40.1457L66.3527 40.4219L66.0994 40.7035L65.8465 40.9905L65.5943 41.2826L65.343 41.5798L65.0925 41.8821L64.8432 42.1891L64.5951 42.501L64.3484 42.8174L64.1032 43.1383L63.8597 43.4636L63.6179 43.793L63.378 44.1265L63.1402 44.4638L62.9044 44.8048L62.671 45.1494L62.44 45.4974L62.2114 45.8485L61.9855 46.2026L61.7623 46.5596L61.5419 46.9192L61.3244 47.2812L61.1099 47.6455L60.8986 48.0118L60.6905 48.38L60.4856 48.7498L60.2841 49.1211L60.0861 49.4935L59.8916 49.867L59.7007 50.2412L59.5134 50.6161L59.3299 50.9912L59.1502 51.3665L58.9742 51.7416L58.8022 52.1165L58.6341 52.4907L58.47 52.8642L58.3099 53.2367L58.1538 53.6079L58.0018 53.9776L57.8539 54.3456L57.7101 54.7117L57.5704 55.0756L57.4349 55.4371L57.3035 55.796L57.1763 56.152L57.0532 56.5048L56.9342 56.8544L56.8194 57.2004L56.7087 57.5427L56.6021 57.8809L56.4995 58.2149L56.401 58.5445L56.3065 58.8694L56.216 59.1894L56.1294 59.5043L56.0467 59.8139L55.9678 60.1181L55.8928 60.4165L55.8214 60.709L55.7538 60.9954L55.6897 61.2754L55.6292 61.549L55.5721 61.816L55.5185 62.076L55.4682 62.329L55.4211 62.5748L55.3771 62.8133L55.3362 63.0442L55.2983 63.2674L55.2633 63.4827L55.2311 63.69L55.2015 63.8892L55.1745 64.0802L55.15 64.2627L55.1279 64.4366L55.108 64.6019L55.0902 64.7584L55.0745 64.9061L55.0608 65.0447L55.0488 65.1743L55.0385 65.2947L55.0297 65.4059L55.0224 65.5077L55.0164 65.6001L55.0115 65.683L55.0077 65.7564L55.0049 65.8202L55.0028 65.8744L55.0014 65.919L55.0006 65.9538L55.0002 65.979L55 65.9943L55 66L54.9999 65.9959L54.9998 65.9821L54.9994 65.9585L54.9986 65.9252L54.9973 65.8822L54.9954 65.8295L54.9927 65.7672L54.9891 65.6953L54.9844 65.6139L54.9786 65.523L54.9715 65.4227L54.963 65.313L54.9529 65.1941L54.9412 65.066L54.9277 64.9288L54.9123 64.7826L54.8949 64.6274L54.8754 64.4635L54.8536 64.2909L54.8295 64.1098L54.8029 63.9202L54.7737 63.7223L54.7419 63.5163L54.7074 63.3022L54.6699 63.0802L54.6295 62.8506L54.5861 62.6133L54.5395 62.3687L54.4897 62.1168L54.4365 61.8578L54.38 61.592L54.3201 61.3195L54.2566 61.0404L54.1895 60.755L54.1188 60.4635L54.0443 60.166L53.966 59.8627L53.884 59.554L53.798 59.2399L53.7081 58.9207L53.6142 58.5965L53.5164 58.2677L53.4145 57.9344L53.3085 57.5968L53.1984 57.2552L53.0843 56.9098L52.966 56.5607L52.8435 56.2084L52.717 55.8529L52.5862 55.4945L52.4514 55.1334L52.3124 54.7698L52.1692 54.4041L52.022 54.0364L51.8706 53.6669L51.7152 53.2959L51.5557 52.9236L51.3922 52.5503L51.2247 52.1761L51.0533 51.8014L50.878 51.4262L50.6989 51.051L50.516 50.6758L50.3293 50.3009L50.139 49.9266L49.945 49.553L49.7476 49.1803L49.5466 48.8089L49.3423 48.4388L49.1347 48.0704L48.9238 47.7037L48.7099 47.3391L48.4929 46.9767L48.2729 46.6167L48.0502 46.2593L47.8247 45.9047L47.5965 45.5531L47.3659 45.2046L47.1328 44.8595L46.8975 44.5179L46.6599 44.18L46.4204 43.8459L46.1789 43.5158L45.9356 43.1899L45.6906 42.8682L45.4442 42.5511L45.1963 42.2385L44.9472 41.9306L44.6969 41.6276L44.4457 41.3296L44.1936 41.0366L43.9409 40.7489L43.6876 40.4664L43.4339 40.1894L43.1799 39.9178L42.9259 39.6518L42.6719 39.3915L42.4182 39.1369L42.1648 38.8881L41.9119 38.6452L41.6597 38.4082L41.4084 38.1771L41.158 37.9521L40.9088 37.7331L40.6609 37.5202L40.4144 37.3134L40.1696 37.1126L39.9265 36.9181L39.6854 36.7296L39.4463 36.5473L39.2095 36.3711L38.9751 36.201L38.7432 36.0369L38.5141 35.8789L38.2877 35.727L38.0644 35.581L37.8442 35.4409L37.6273 35.3067L37.4139 35.1783L37.204 35.0557L36.9978 34.9388L36.7955 34.8274L36.5972 34.7216L36.403 34.6212L36.213 34.5262L36.0275 34.4363L35.8464 34.3517L35.67 34.272L35.4984 34.1973L35.3316 34.1273L35.1698 34.062L35.0131 34.0013L34.8616 33.945L34.7154 33.8929L34.5746 33.8449L34.4393 33.8009L34.3096 33.7608L34.1856 33.7243L34.0674 33.6913L33.955 33.6617L33.8486 33.6352L33.7482 33.6118L33.6538 33.5912L33.5656 33.5733L33.4836 33.5579L33.4079 33.5448L33.3385 33.5338L33.2754 33.5247L33.2188 33.5175L33.1686 33.5118L33.1248 33.5075L33.0876 33.5043L33.0569 33.5022L33.0328 33.5009L33.0153 33.5002L33.0044 33.4999L33 33.4999L33.0022 33.4999L33.0111 33.4997L33.0265 33.4991L33.0486 33.498L33.0771 33.4962L33.1123 33.4934L33.1539 33.4895L33.2021 33.4843L33.2567 33.4775L33.3177 33.4691L33.3851 33.4587L33.4588 33.4463L33.5388 33.4316L33.6251 33.4145L33.7175 33.3948L33.816 33.3723L33.9205 33.3468L34.031 33.3182L34.1473 33.2863L34.2695 33.251L34.3974 33.212L34.5309 33.1693L34.6699 33.1226L34.8144 33.0718L34.9642 33.0169L35.1193 32.9575L35.2795 32.8937L35.4447 32.8253L35.6148 32.7521L35.7897 32.674L35.9693 32.5909L36.1534 32.5028L36.342 32.4094L36.5349 32.3107L36.7319 32.2066L36.9329 32.0971L37.1379 31.9819L37.3466 31.8611L37.5589 31.7346L37.7748 31.6022L37.9939 31.464L38.2163 31.3199L38.4417 31.1699L38.6699 31.0138L38.901 30.8517L39.1346 30.6835L39.3707 30.5093L39.609 30.3289L39.8495 30.1424L40.092 29.9498L40.3363 29.751L40.5822 29.5461L40.8297 29.3351L41.0785 29.1181L41.3285 28.895L41.5796 28.6658L41.8315 28.4307L42.0842 28.1897L42.3374 27.9427L42.5911 27.69L42.845 27.4315L43.099 27.1673L43.353 26.8975L43.6068 26.6222L43.8602 26.3414L44.1132 26.0553L44.3655 25.764L44.617 25.4676L44.8676 25.1662L45.1171 24.8598L45.3654 24.5487L45.6123 24.233L45.8577 23.9128L46.1016 23.5882L46.3436 23.2595L46.5838 22.9266L46.822 22.5899L47.0581 22.2495L47.2919 21.9055L47.5233 21.558L47.7523 21.2074L47.9786 20.8537L48.2023 20.4972L48.4231 20.138L48.6411 19.7763L48.856 19.4124L49.0679 19.0464L49.2765 18.6785L49.4819 18.3089L49.6839 17.9379L49.8825 17.5656L50.0776 17.1923L50.2691 16.8182L50.4569 16.4434L50.641 16.0683L50.8214 15.693L50.9979 15.3178L51.1706 14.9429L51.3393 14.5686L51.5041 14.1949L51.6648 13.8223L51.8215 13.4509L51.9742 13.0809L52.1228 12.7126L52.2672 12.3462L52.4075 11.9819L52.5437 11.62L52.6758 11.2607L52.8037 10.9043L52.9274 10.5509L53.047 10.2008L53.1625 9.85419L53.2739 9.51134L53.3812 9.17246L53.4844 8.83777L53.5835 8.50748L53.6786 8.18183L53.7698 7.86101L53.857 7.54526L53.9403 7.23477L54.0198 6.92976L54.0954 6.63042L54.1674 6.33697L54.2356 6.04959L54.3003 5.76849L54.3613 5.49385L54.4189 5.22585L54.4731 4.96469L54.524 4.71054L54.5716 4.46357L54.616 4.22395L54.6574 3.99184L54.6957 3.76741L54.7312 3.55081L54.7639 3.34219L54.7939 3.14169L54.8213 2.94945L54.8462 2.7656L54.8687 2.59027L54.8889 2.42358L54.907 2.26565L54.923 2.11659L54.9371 1.97649L54.9494 1.84547L54.9599 1.7236L54.9689 1.61098L54.9765 1.50768L54.9827 1.41377L54.9877 1.32933L54.9916 1.2544L54.9946 1.18905L54.9968 1.13331L54.9983 1.08723L54.9992 1.05083L54.9997 1.02415L54.9999 1.0072L55 1L55 1.00255L55.0001 1.01484L55.0004 1.03687L55.0011 1.06863L55.0023 1.11008L55.0042 1.16121L55.0067 1.22198L55.0102 1.29234L55.0147 1.37224L55.0203 1.46164L55.0272 1.56046L55.0355 1.66863L55.0453 1.78609L55.0567 1.91275L55.07 2.04853L55.085 2.19332L55.1021 2.34702L55.1213 2.50954L55.1427 2.68075L55.1664 2.86055L55.1926 3.0488L55.2214 3.24537L55.2527 3.45013L55.2869 3.66294L55.3238 3.88364L55.3638 4.1121L55.4067 4.34815L55.4528 4.59163L55.5021 4.84237L55.5547 5.10021L55.6106 5.36496L55.67 5.63645L55.733 5.91449L55.7995 6.19889L55.8696 6.48946L55.9435 6.78601L56.0212 7.08834L56.1026 7.39624L56.188 7.7095L56.2772 8.02793L56.3705 8.35129L56.4677 8.6794L56.5689 9.01201L56.6743 9.34892L56.7837 9.6899L56.8972 10.0347L57.0148 10.3832L57.1366 10.735L57.2625 11.0901L57.3926 11.448L57.5268 11.8087L57.6651 12.1719L57.8076 12.5373L57.9542 12.9047L58.1049 13.2739L58.2597 13.6447L58.4186 14.0168L58.5814 14.3899L58.7482 14.764L58.919 15.1387L59.0937 15.5138L59.2722 15.889L59.4546 16.2642L59.6406 16.6392L59.8304 17.0136L60.0238 17.3874L60.2207 17.7602L60.4211 18.1318L60.6249 18.5021L60.832 18.8708L61.0423 19.2378L61.2558 19.6027L61.4723 19.9655L61.6918 20.3259L61.9141 20.6837L62.1392 21.0388L62.3669 21.3909L62.5972 21.7399L62.8298 22.0855L63.0648 22.4277L63.302 22.7662L63.5413 23.1009L63.7825 23.4317L64.0255 23.7583L64.2702 24.0806L64.5164 24.3985L64.7641 24.7118L65.013 25.0204L65.2631 25.3242L65.5142 25.623L65.7661 25.9168L66.0188 26.2054L66.272 26.4887L66.5256 26.7666L66.7795 27.0391L67.0336 27.306L67.2875 27.5672L67.5413 27.8227L67.7948 28.0724L68.0478 28.3163L68.3001 28.5542L68.5516 28.7862L68.8021 29.0122L69.0515 29.2322L69.2996 29.4461L69.5463 29.6539L69.7914 29.8556L70.0348 30.0511L70.2762 30.2405L70.5156 30.4238L70.7528 30.601L70.9876 30.7721L71.2199 30.9371L71.4495 31.0961L71.6763 31.249L71.9001 31.3959L72.1208 31.5369L72.3383 31.6721L72.5523 31.8014L72.7628 31.9249L72.9695 32.0427L73.1725 32.155L73.3714 32.2617L73.5663 32.3629L73.7569 32.4588L73.9432 32.5494L74.125 32.6349L74.3021 32.7154L74.4745 32.7909L74.6421 32.8616L74.8047 32.9276L74.9622 32.9891L75.1146 33.0461L75.2616 33.0989L75.4033 33.1475L75.5395 33.1921L75.67 33.2328L75.7949 33.2699L75.9141 33.3034L76.0274 33.3336L76.1348 33.3605L76.2362 33.3844L76.3315 33.4054L76.4207 33.4238L76.5037 33.4396L76.5804 33.4531L76.6508 33.4644L76.7149 33.4737L76.7726 33.4812L76.8238 33.4872L76.8686 33.4917L76.9068 33.495L76.9385 33.4973L76.9637 33.4987L76.9823 33.4995L76.9943 33.4998L77 33.4999Z" stroke="white" strokeWidth="4" />
                    </svg>

                </Col>
                <Col className={styles.textContainer} lg={9} sm={12}>
                    <h6>Become more desirable by advertisers and brands you want to work with by provifing accurate metrics and data that makes sense.</h6>
                </Col>
            </Row>
        </div>
    )
}
