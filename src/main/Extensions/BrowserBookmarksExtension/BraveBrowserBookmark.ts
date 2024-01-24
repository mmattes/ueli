import { SearchResultItem } from "@common/Core";
import type { BrowserBookmark } from "./BrowserBookmark";

export class BraveBrowserBookmark implements BrowserBookmark {
    public constructor(
        private readonly name: string,
        private readonly url: string,
        private readonly guid: string,
        private readonly id: string,
    ) {}

    public toSearchResultItem(): SearchResultItem {
        const namePrefix = this.name ? `${this.name} - ` : "";

        return {
            description: "Brave Browser Bookmark",
            defaultAction: {
                argument: this.url,
                description: "Open URL in browser",
                handlerId: "Url",
                hideWindowAfterInvocation: true,
                fluentIcon: "OpenRegular",
            },
            id: `BraveBrowserBookmark-${this.guid}-${this.id}`,
            name: `${namePrefix}${this.url}`,
            imageUrl: `https://favicone.com/${new URL(this.url).host}?s=48`,
        };
    }
}
