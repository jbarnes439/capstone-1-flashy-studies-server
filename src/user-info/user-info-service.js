

const UserInfoService = {    

  getUserById(db, userId) {
    return UserInfoService.getAllUsernames(db)
      .where('user.id', userId)
      .first();
  },
  
};

module.exports = UserInfoService;