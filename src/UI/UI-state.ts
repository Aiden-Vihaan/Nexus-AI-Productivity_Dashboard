export interface UIState {
  activeView:
    | "overview"
    | "tasks"
    | "intelligence"
    | "memory"
    | "insights";

  commandPaletteOpen: boolean;

  notificationPanelOpen: boolean;

  intelligenceExpanded: boolean;

  selectedTaskId?: string;

  selectedInsightId?: string;

  isRefreshing: boolean;
}

export const DEFAULT_UI_STATE:
  UIState = {
    activeView:
      "overview",

    commandPaletteOpen:
      false,

    notificationPanelOpen:
      false,

    intelligenceExpanded:
      false,

    isRefreshing:
      false
  };
