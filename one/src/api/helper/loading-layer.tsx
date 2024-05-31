import ReactDOM from "react-dom/client";
import Loading from "@/components/loading";

export class LoadingLayer {
    private readonly LOADING_SCREEN_LAYER_ID = "loading-screen-layer";
    private loadingQueueCount = 0;
    private static singleton: LoadingLayer;

    private constructor() {
    }

    static getSingleton() {
        if (!this.singleton) {
            this.singleton = new LoadingLayer();
        }
        return this.singleton;
    }

    showFullScreenLoadingLayer() {
        if (this.loadingQueueCount === 0) {
            const screenLayerDom = document.createElement("div");
            screenLayerDom.setAttribute("id", this.LOADING_SCREEN_LAYER_ID);
            document.body.appendChild(screenLayerDom);
            ReactDOM.createRoot(screenLayerDom).render(<Loading/>);
        }
        this.loadingQueueCount++;
    }

    tryHideFullScreenLoadingLayer() {
        if (this.loadingQueueCount <= 0) {
            return;
        }
        this.loadingQueueCount--;
        if (this.loadingQueueCount === 0) {
            const screenLayerDOM = document.getElementById(this.LOADING_SCREEN_LAYER_ID) as HTMLElement;
            document.body.removeChild(screenLayerDOM);
        }
    }
}