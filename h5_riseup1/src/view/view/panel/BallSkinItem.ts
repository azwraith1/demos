/**
 * long description for the file
 *
 * @summary 气球皮肤item
 * @author wangtao
 *
 * Created at     : 2018-08-01 10:03:34 
 * Last modified  : 2018-08-23 15:02:22
 */
module game {
    export class BallSkinItem extends eui.Component {
        // private scoreLabel: eui.Label;
        // private completeLabel: eui.Label;
        private ballSkinImag: eui.Image;

        constructor(data) {
            super();
            this.skinName = "BallSkinItemSkin";
            this.init(data);
        };
        public init(data){
            this.ballSkinImag.source = "resource/assets/balloon_skin"+data+".png";
        }
        

        // dataChanged() {
        //     super.dataChanged();
        //     if(this.data){
        //     for (let i = 0; i <= this.data.length; i++) {
        //         let ballSkinItem: BallSkinItem = new BallSkinItem();
        //         this.ballSkinImag.source = "resource/assets/balloon_skin"+i+".png";
        //         this.addChild(this.ballSkinImag);
        //     }
            // this.scoreLabel.text = data.scoreLable.text + "";
            // this.completeLabel.text = data.completeLable.text + "";
            
        
        
    }
}
