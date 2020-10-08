

const UserInfoService = {  
  
  getAllUsernames(db) {
    return db
      .from('users as user')
      .select(
        'user.username',
        'user.id'
      );
  },

  getUserById(db, userId) {
    return UserInfoService.getAllUsernames(db)
      .where('user.id', userId)
      .first();
  },
};

module.exports = UserInfoService;