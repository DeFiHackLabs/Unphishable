// 挑戰開始時間
export const CHALLENGES_START_DATE = "2025-07-01T00:00:00Z";

// 檢查是否已達到挑戰開始時間
export function isChallengesAvailable(): boolean {
  // 使用伺服器時間，而不是客戶端時間
  // 注意：在客戶端渲染時這仍然會使用用戶的本地時間，所以需要在伺服器端進行驗證
  const now = new Date();
  const startDate = new Date(CHALLENGES_START_DATE);
  return now >= startDate;
}
