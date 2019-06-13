export default class GameConfig {
    /**人种 - 普通人 */
    public static COMMON_MAN : string = "common";
    /**人种 - 小偷 */
    public static ROBBER_MAN : string = "robber";
    /**人种 - 土匪 */
    public static BANDIT_MAN : string = "bandit";
    /**人种 - 明星 */
    public static STAR_MAN : string = "star";
    /**人种 - 科学家 */
    public static SCIENTIST_MAN : string = "scientist";


    //----------------------------------建筑
    /**医院 */
    public static HOSPITAL : number = 1;
    /**军队 */
    public static ARMY : number = 2;
    /**农场 */
    public static FARM: number = 3;
    /**科技 */
    public static TECHNOLOGY: number = 4;
    /**事件房 新闻房 */
    public static EVENT_HOUSE: number = 5;
    /**皇宫 */
    public static PALACE: number = 6;
    //----------------------------------检测点的间距
    /**检测点间距 */
    public static TEST_POINT_DIC : number = 5;
    /**速度 */
    public static TEST_POINT_SPEED : number = 0.5;
    /**旋转角度偏移 */
    public static TEST_POINT_RO : number = 5;
    /**人类生产间隔 */
    public static PERSON_CREATE_TIME : number = 2;
}