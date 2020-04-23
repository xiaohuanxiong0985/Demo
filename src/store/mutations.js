const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token;
  },
  SET_USERLIST: (state, userList) => {
    state.userList = userList;
  },
  SET_USER_INDEX: (status, userIndex) => {
    status.userIndex = userIndex;
  },
  //  设置当前页面信息
  SET_PAGEINFO: (status, info) => {
    status.pageInfo = info;
  },
  SET_INVOICE_INFO: (status, info) => {
    status.invoiceInfo = info;
  },
  SET_USERROUT: (status, userRouter) => {
    status.userRouter = userRouter;
  },
  SET_FILENUMBER: (status, fileNumber) => {
    status.fileNumber = fileNumber;
  },
  //  判断发票是否修改
  SET_ISEDIT: (status, val) => {
    status.invoiceEdit = val;
  }
};
export default mutations;
