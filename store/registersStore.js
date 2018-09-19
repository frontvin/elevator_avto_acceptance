export const state = () => ({
    regInfo: 
      {
        drivername: '',
        driversurname: '',
        sertificate: '',
        carbrand: '',
        carmodel: '',
        carnumber: '',
        carcolor: '',
        regdate: '',
        cargo: '',
        weight: ''  
      },
    registrations: []
  })

export const mutations = {
  SET_DRIVERNAME(state, drivername){
    state.regInfo.drivername = drivername
  },
  SET_DRIVERSURNAME(state, driversurname){
    state.regInfo.driversurname = driversurname
  },
  SET_SERTIFICATE(state, sertificate){
    state.regInfo.sertificate = sertificate
  },
  SET_CARBRAND(state, carbrand){
    state.regInfo.carbrand = carbrand
  },
  SET_CARMODEL(state, carmodel){
    state.regInfo.carmodel = carmodel
  },
  SET_CARNUMBER(state, carnumber){
    state.regInfo.carnumber = carnumber
  },
  SET_CARCOLOR(state, carcolor){
    state.regInfo.carcolor = carcolor
  },
  SET_REGDATE(state, regdate){
    state.regInfo.regdate = regdate
  },
  SET_CARGO(state, cargo){
    state.regInfo.cargo = cargo
  },
  SET_WEIGHT(state, weight){
    state.regInfo.weight = weight
  }
}