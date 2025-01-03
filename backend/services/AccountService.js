const { ACCOUNT_TYPES, MAX } = require('../constant');
const { hashPassword } = require('../helper/Auth');
const AccountModel = require('../models/Account');
const UserModel = require('../models/User');
const { uploadImage } = require('./CommonService');

exports.isExistAccount = async (email) => {
  try {
    return await AccountModel.exists({ email });
  } catch (error) {
    throw error;
  }
};

exports.findAccount = async (email) => {
  try {
    return await AccountModel.findOne({ email });
  } catch (error) {
    throw error;
  }
};

exports.createAccount = async (
  email,
  password,
  authType = ACCOUNT_TYPES.LOCAL,
) => {
  try {
    const newAccount = await AccountModel.create({
      email,
      password,
      authType,
      createdDate: new Date(),
    });
    if (newAccount && newAccount._id) return newAccount._id;
    return null;
  } catch (error) {
    throw error;
  }
};

exports.createUser = async (accountId, username, name, avt = '') => {
  try {
    const newUser = await UserModel.create({ accountId, name, username, avt });
    if (newUser && newUser._id) return newUser;
    return null;
  } catch (error) {
    throw error;
  }
};

exports.isExistWordInFavorites = async (word, username) => {
  try {
    const isExist = await UserModel.exists({
      username,
      favoriteList: { $elemMatch: { $regex: word, $options: 'i' } }, // $regex cho case-insensitive
    });

    return isExist;
  } catch (error) {
    throw error;
  }
};

exports.isLimitedFavorites = async (word, username) => {
  try {
    // check limit amount
    const user = await UserModel.findOne({ username }).select('favoriteList');
    const { favoriteList = null } = user;

    if (
      Array.isArray(favoriteList) &&
      favoriteList.length >= MAX.FAVORITES_LEN
    ) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};

exports.updateFavoriteList = async (word, username, isAdd = false) => {
  try {
    if (isAdd) {
      return await UserModel.updateOne(
        { username },
        { $addToSet: { favoriteList: word } }, // $addToSet tránh trùng lặp
      );
    }

    return await UserModel.updateOne(
      { username },
      { $pull: { favoriteList: word } }, // Trực tiếp so khớp giá trị
    );
  } catch (error) {
    throw error;
  }
};

exports.updateUserCoin = async (newCoin = 0, username = '') => {
  try {
    if (
      newCoin < 0 ||
      newCoin > MAX.USER_COIN ||
      !username ||
      username === ''
    ) {
      return false;
    }

    const updateRes = await UserModel.updateOne(
      { username },
      { coin: newCoin },
    );

    if (updateRes.ok) {
      return true;
    }
  } catch (error) {
    throw error;
  }
};

exports.updatePassword = async (email = '', newPassword = '') => {
  try {
    const hashPw = await hashPassword(newPassword);

    const res = await AccountModel.updateOne({ email }, { password: hashPw });

    if (res.ok) {
      return true;
    }

    return false;
  } catch (error) {
    throw error;
  }
};

exports.updateAvt = async (username = '', avtSrc = '') => {
  try {
    const picture = await uploadImage(avtSrc, 'dynonary/user-avt');
    const isUpdated = await UserModel.updateOne({ username }, { avt: picture });
    if (isUpdated.modifiedCount > 0) {
      return picture;
    }

    return false;
  } catch (error) {
    throw error;
  }
};

exports.updateProfile = async (
  username = '',
  newName = '',
  newUsername = '',
) => {
  try {
    if (username.toLowerCase() !== newUsername.toLowerCase()) {
      const isExist = await UserModel.exists({ username: newUsername });
      if (isExist) {
        return { status: false, message: 'username đã được sử dụng' };
      }
    }

    const isUpdated = await UserModel.updateOne(
      { username },
      { name: newName, username: newUsername },
    );

    if (isUpdated.modifiedCount > 0)
      return { status: true, message: 'success' };

    return false;
  } catch (error) {
    throw error;
  }
};

exports.getProfile = async (accountId = '') => {
  try {
    const account = await AccountModel.findById(accountId).select(
      'email createdDate',
    );
    return account;
  } catch (error) {
    throw error;
  }
};
