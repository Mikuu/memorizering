// ToDo: this config not work, it's running on FE, no env there...
const host = process.env.MMR_ENV === 'docker' ? `${process.env.MEMORIZEND_HOST}:${process.env.MEMORIZEND_PORT}` : 'localhost:3401'
console.log(host)
export default {
  HOST: "http://" + host,
  BATH_PATH: "",
  PATH_CONFIG_INIT: "/config/init",
  PATH_TIMEWORDS_T0: "/timewords/t0",
  PATH_TIMEWORDS_T1: "/timewords/t1",
  PATH_TIMEWORDS_T2: "/timewords/t2",
  PATH_TIMEWORDS_T3: "/timewords/t3",
  PATH_TIMEWORDS_CROSS_DAYS: "/timewords/crossDays",
}
