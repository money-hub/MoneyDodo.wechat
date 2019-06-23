/**
 * config.js
 * 定义与业务相关的常量
 */
// 认证状态，对应的变量为store.data.profile.certificationStatus
const CERT_STATUS_UNCERT = 0 // 未认证
const CERT_STATUS_CERTING = 1 // 审核中
const CERT_STATUS_CERTED = 2 // 认证通过

// task状态
const TASK_STATE_NON_RELEASED = 'non-released'
const TASK_STATE_RELEASED = 'released'
const TASK_STATE_CLOSED = "closed"

// task类型
const TASK_KIND_QUESTIONNAIRE = 'questionnaire'

// deal状态
const DEAL_STATE_UNDERWAY = "underway"
const DEAL_STATE_CLOSURE = "CLOSURE"

export default {
  CERT_STATUS_UNCERT: CERT_STATUS_UNCERT,
  CERT_STATUS_CERTING: CERT_STATUS_CERTING,
  CERT_STATUS_CERTED: CERT_STATUS_CERTED,
  TASK_STATE_NON_RELEASED: TASK_STATE_NON_RELEASED,
  TASK_STATE_RELEASED: TASK_STATE_RELEASED,
  TASK_STATE_CLOSED: TASK_STATE_CLOSED,
  TASK_KIND_QUESTIONNAIRE: TASK_KIND_QUESTIONNAIRE,
  DEAL_STATE_UNDERWAY: DEAL_STATE_UNDERWAY,
  DEAL_STATE_CLOSURE: DEAL_STATE_CLOSURE
}