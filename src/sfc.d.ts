/**
 * 用于解决ts文件中不能引入vue文件
 */
declare module "*.vue" {
  import Vue from 'vue'
  export default Vue
}