/*
THIS IS A GENERATED/BUNDLED FILE BY ESBUILD
if you want to view the source, please visit the github repository of this plugin
*/

var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// main.ts
var main_exports = {};
__export(main_exports, {
  default: () => InsertInvisibleRTL
});
module.exports = __toCommonJS(main_exports);
var import_obsidian = require("obsidian");
var DEFAULT_SETTINGS = {
  showStatusBar: true,
  showRightClick: true
};
var InsertInvisibleRTL = class extends import_obsidian.Plugin {
  async onload() {
    await this.loadSettings();
    const InsertInvisibleCharCommand = {
      id: "invisibleCharacter",
      name: "Insert invisible Character",
      editorCallback: (editor, view) => {
        let noticeContent = document.createDocumentFragment();
        noticeContent.createEl("div", {
          text: "\u{1F514} Character has been inserted",
          attr: { style: "font-size: 1.2em;" }
        });
        editor.replaceSelection("\u061C");
        new import_obsidian.Notice(noticeContent, 2e3);
      }
    };
    const onClickStatusBarItem = (evt) => {
      if (2 === evt.button) {
        new MoreInfoModal(this.app).open();
      } else {
        this.app.commands.executeCommandById(InsertInvisibleCharCommand.id);
      }
    };
    var statusBarItemEl = this.addStatusBarItem();
    statusBarItemEl.setAttr("id", "statusButton");
    statusBarItemEl.setAttr("aria-label", "Insert a Invisible RTL Character (click right for more info)");
    statusBarItemEl.setAttr("aria-label-position", "top");
    statusBarItemEl.addClass("mod-clickable");
    statusBarItemEl.onClickEvent((this, onClickStatusBarItem));
    statusBarItemEl.style.display = "block";
    const languageIcon1 = (0, (0, import_obsidian.getIcon)("pilcrow"));
    languageIcon1.style.transform = "rotateY(180deg)";
    statusBarItemEl.appendChild(languageIcon1);
    statusBarItemEl = statusBarItemEl.createEl("span");
    statusBarItemEl.setText("InsertRTL");
    statusBarItemEl.style.marginLeft = "5px";
    this.addSettingTab(new TabsForSettings(this.app, this));
    this.addCommand(InsertInvisibleCharCommand);
    this.registerEvent(
      this.app.workspace.on("editor-menu", (menu) => {
        if (this.settings.showRightClick) {
          menu.addItem((item) => {
            item.setTitle("InsertRTL").setIcon("pilcrow").onClick((evt) => {
              onClickStatusBarItem(evt);
            });
          });
        }
      })
    );
  }
  onunload() {
  }
  async loadSettings() {
    this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
  }
  async saveSettings() {
    await this.saveData(this.settings);
  }
  async changeStatusBar() {
    var statusBarItemEl = document.getElementById("statusButton");
    if (statusBarItemEl === null) {
      return;
    }
    statusBarItemEl.style.display = this.settings.showStatusBar ? "block" : "none";
  }
};
var MoreInfoModal = class extends import_obsidian.Modal {
  constructor(app) {
    super(app);
  }
  onOpen() {
    const { contentEl } = this;
    contentEl.innerHTML = 'This Plugin Insert a invisible RTL Character (U+061C) in Unicode<h1 style="color:#ff0000; text-align: center;">AFTER</h1>the cursor, so that other Plugins or programs can correctly display RTL text even if the First Character is in LTR languages.';
  }
  onClose() {
    const { contentEl } = this;
    contentEl.empty();
  }
};
var TabsForSettings = class extends import_obsidian.PluginSettingTab {
  constructor(app, plugin) {
    super(app, plugin);
    this.plugin = plugin;
  }
  display() {
    const { containerEl } = this;
    containerEl.empty();
    containerEl.createEl("h2", { text: "Settings for Plugin Button Display." });
    new import_obsidian.Setting(containerEl).setName("Show/Hilde from Status Bar").setDesc("turn on to show insert button, or turn off to hide.").addToggle(
      (toggle) => toggle.setValue(this.plugin.settings.showStatusBar).onChange((value) => {
        this.plugin.settings.showStatusBar = !this.plugin.settings.showStatusBar;
        this.plugin.saveSettings();
        this.plugin.changeStatusBar();
      })
    );
    new import_obsidian.Setting(containerEl).setName("Show/Hilde from Right Click Menu").setDesc("turn on to show insert button, or turn off to hide.").addToggle((toggle) => toggle.setValue(this.plugin.settings.showRightClick).onChange((value) => {
      this.plugin.settings.showRightClick = !this.plugin.settings.showRightClick;
      this.plugin.saveSettings();
    }));
  }
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsibWFpbi50cyJdLAogICJzb3VyY2VzQ29udGVudCI6IFsiaW1wb3J0IHsgQXBwLCBFZGl0b3IsIE1hcmtkb3duVmlldywgTW9kYWwsIE5vdGljZSwgUGx1Z2luLCBQbHVnaW5TZXR0aW5nVGFiLCBnZXRJY29uLCBTZXR0aW5nLCBDb21tYW5kLCBUb2dnbGVDb21wb25lbnQsIE1lbnVJdGVtIH0gZnJvbSAnb2JzaWRpYW4nO1xuaW50ZXJmYWNlIEluc2VydFJUTFNldHRpbmdzIHtcblx0c2hvd1N0YXR1c0JhcjogYm9vbGVhbjtcblx0c2hvd1JpZ2h0Q2xpY2s6IGJvb2xlYW47XG59XG5cbmNvbnN0IERFRkFVTFRfU0VUVElOR1M6IEluc2VydFJUTFNldHRpbmdzID0ge1xuXHRzaG93U3RhdHVzQmFyOiB0cnVlLFxuXHRzaG93UmlnaHRDbGljazogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5zZXJ0SW52aXNpYmxlUlRMIGV4dGVuZHMgUGx1Z2luIHtcblx0c2V0dGluZ3M6IEluc2VydFJUTFNldHRpbmdzO1xuXHRhc3luYyBvbmxvYWQoKSB7XG5cdFx0YXdhaXQgdGhpcy5sb2FkU2V0dGluZ3MoKTtcblxuXHRcdGNvbnN0IEluc2VydEludmlzaWJsZUNoYXJDb21tYW5kOiBDb21tYW5kID0ge1xuXHRcdFx0aWQ6ICdpbnZpc2libGVDaGFyYWN0ZXInLFxuXHRcdFx0bmFtZTogJ0luc2VydCBpbnZpc2libGUgQ2hhcmFjdGVyJyxcblx0XHRcdGVkaXRvckNhbGxiYWNrOihlZGl0b3I6IEVkaXRvciwgdmlldzogTWFya2Rvd25WaWV3KSA9PiB7XG5cdFx0XHRcdGxldCBub3RpY2VDb250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRG9jdW1lbnRGcmFnbWVudCgpO1xuXHRcdFx0XHRub3RpY2VDb250ZW50LmNyZWF0ZUVsKCdkaXYnLCB7dGV4dDogJ1x1RDgzRFx1REQxNCBDaGFyYWN0ZXIgaGFzIGJlZW4gaW5zZXJ0ZWQnLFxuXHRcdFx0XHRhdHRyOiB7c3R5bGU6ICdmb250LXNpemU6IDEuMmVtOyd9fSk7XG5cdFx0XHRcdC8vIEB0cy1pZ25vcmVcblx0XHRcdFx0ZWRpdG9yLnJlcGxhY2VTZWxlY3Rpb24oJ1x1MDYxQycpO1xuXHRcdFx0XHRuZXcgTm90aWNlKG5vdGljZUNvbnRlbnQsIDIwMDApO1xuXHRcdFx0fVxuXHRcdH07XG5cdFxuXHRcdGNvbnN0IG9uQ2xpY2tTdGF0dXNCYXJJdGVtID0gKGV2dDogTW91c2VFdmVudCkgPT4ge1xuXHRcdFx0aWYgKDIgPT09IGV2dC5idXR0b24pIHtcblx0XHRcdFx0bmV3IE1vcmVJbmZvTW9kYWwodGhpcy5hcHApLm9wZW4oKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdC8vQHRzLWlnbm9yZVxuXHRcdFx0XHR0aGlzLmFwcC5jb21tYW5kcy5leGVjdXRlQ29tbWFuZEJ5SWQoSW5zZXJ0SW52aXNpYmxlQ2hhckNvbW1hbmQuaWQpO1xuXHRcdFx0fVxuXHRcdH1cblx0XHRcblx0XHQvLyBUaGlzIGFkZHMgYSBzdGF0dXMgYmFyIGl0ZW0gdG8gdGhlIGJvdHRvbSBvZiB0aGUgYXBwLiBEb2VzIG5vdCB3b3JrIG9uIG1vYmlsZSBhcHBzLlxuXHRcdHZhciBzdGF0dXNCYXJJdGVtRWwgPSB0aGlzLmFkZFN0YXR1c0Jhckl0ZW0oKTtcblx0XHRzdGF0dXNCYXJJdGVtRWwuc2V0QXR0cihcImlkXCIsIFwic3RhdHVzQnV0dG9uXCIpO1xuXHRcdHN0YXR1c0Jhckl0ZW1FbC5zZXRBdHRyKFwiYXJpYS1sYWJlbFwiLCBcIkluc2VydCBhIEludmlzaWJsZSBSVEwgQ2hhcmFjdGVyIChjbGljayByaWdodCBmb3IgbW9yZSBpbmZvKVwiKTtcblx0XHRzdGF0dXNCYXJJdGVtRWwuc2V0QXR0cihcImFyaWEtbGFiZWwtcG9zaXRpb25cIiwgXCJ0b3BcIik7XG5cdFx0c3RhdHVzQmFySXRlbUVsLmFkZENsYXNzKFwibW9kLWNsaWNrYWJsZVwiKTtcblx0XHRzdGF0dXNCYXJJdGVtRWwub25DbGlja0V2ZW50KCh0aGlzLCBvbkNsaWNrU3RhdHVzQmFySXRlbSkpO1xuXHRcdHN0YXR1c0Jhckl0ZW1FbC5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiO1xuXHRcdC8vIEB0cy1pZ25vcmVcblx0XHRjb25zdCBsYW5ndWFnZUljb24xOiBhbnkgPSAoMCwgZ2V0SWNvbigncGlsY3JvdycpKTtcblx0XHRsYW5ndWFnZUljb24xLnN0eWxlLnRyYW5zZm9ybSA9IFwicm90YXRlWSgxODBkZWcpXCI7XG5cdFx0c3RhdHVzQmFySXRlbUVsLmFwcGVuZENoaWxkKGxhbmd1YWdlSWNvbjEpO1xuXHRcdHN0YXR1c0Jhckl0ZW1FbCA9ICBzdGF0dXNCYXJJdGVtRWwuY3JlYXRlRWwoXCJzcGFuXCIpO1xuXHRcdHN0YXR1c0Jhckl0ZW1FbC5zZXRUZXh0KCdJbnNlcnRSVEwnKTtcblx0XHRzdGF0dXNCYXJJdGVtRWwuc3R5bGUubWFyZ2luTGVmdCA9IFwiNXB4XCI7XG5cblx0XHR0aGlzLmFkZFNldHRpbmdUYWIobmV3IFRhYnNGb3JTZXR0aW5ncyh0aGlzLmFwcCwgdGhpcykpO1xuXG5cdFx0dGhpcy5hZGRDb21tYW5kKEluc2VydEludmlzaWJsZUNoYXJDb21tYW5kKTtcblx0XHR0aGlzLnJlZ2lzdGVyRXZlbnQoXG5cdFx0XHR0aGlzLmFwcC53b3Jrc3BhY2Uub24oXCJlZGl0b3ItbWVudVwiLCAobWVudSkgPT4ge1xuXHRcdFx0XHRpZiAodGhpcy5zZXR0aW5ncy5zaG93UmlnaHRDbGljaykge1xuXHRcdFx0XHRcdG1lbnUuYWRkSXRlbSgoaXRlbSkgPT4ge1xuXHRcdFx0XHRcdFx0aXRlbS5zZXRUaXRsZShcIkluc2VydFJUTFwiKVxuXHRcdFx0XHRcdFx0LnNldEljb24oXCJwaWxjcm93XCIpXG5cdFx0XHRcdFx0XHQub25DbGljaygoZXZ0OiBNb3VzZUV2ZW50KSA9PiB7XG5cdFx0XHRcdFx0XHRcdG9uQ2xpY2tTdGF0dXNCYXJJdGVtKGV2dCk7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fVxuXHRcdFx0XHRcblx0XHRcdH0pXG5cdFx0KTtcblx0fVxuXG5cdG9udW5sb2FkKCkge1xuXHR9XG5cblx0YXN5bmMgbG9hZFNldHRpbmdzKCkge1xuXHRcdHRoaXMuc2V0dGluZ3MgPSBPYmplY3QuYXNzaWduKHt9LCBERUZBVUxUX1NFVFRJTkdTLCBhd2FpdCB0aGlzLmxvYWREYXRhKCkpO1xuXHR9XG5cblx0YXN5bmMgc2F2ZVNldHRpbmdzKCkge1xuXHRcdGF3YWl0IHRoaXMuc2F2ZURhdGEodGhpcy5zZXR0aW5ncyk7XG5cdH1cblxuXHRhc3luYyBjaGFuZ2VTdGF0dXNCYXIoKSB7XG5cdFx0Ly8gZ2V0IGVsZW1lbnQgYnkgaWRcblx0XHR2YXIgc3RhdHVzQmFySXRlbUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzdGF0dXNCdXR0b25cIik7XG5cdFx0Ly8gZG9uJ3QgZm9yZ2V0IHRvIGNoZWNrIGZvciBudWxsXG5cdFx0aWYgKHN0YXR1c0Jhckl0ZW1FbCA9PT0gbnVsbCkge1xuXHRcdFx0cmV0dXJuO1xuXHRcdH1cblx0XHRzdGF0dXNCYXJJdGVtRWwuc3R5bGUuZGlzcGxheSA9IHRoaXMuc2V0dGluZ3Muc2hvd1N0YXR1c0JhciA/IFwiYmxvY2tcIiA6IFwibm9uZVwiO1xuXHR9XG59XG5cbmNsYXNzIE1vcmVJbmZvTW9kYWwgZXh0ZW5kcyBNb2RhbCB7XG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwKSB7XG5cdFx0c3VwZXIoYXBwKTtcblx0fVxuXG5cdG9uT3BlbigpIHtcblx0XHRjb25zdCB7Y29udGVudEVsfSA9IHRoaXM7XG5cdFx0Ly8gbWFrZSB0aGUgd29yZCBBRlRFUiBib2xkIGFuZCByZWRcblx0XHRjb250ZW50RWwuaW5uZXJIVE1MID0gJ1RoaXMgUGx1Z2luIEluc2VydCBhIGludmlzaWJsZSBSVEwgQ2hhcmFjdGVyIChVKzA2MUMpIGluIFVuaWNvZGUnICtcblx0XHQgJzxoMSBzdHlsZT1cImNvbG9yOiNmZjAwMDA7IHRleHQtYWxpZ246IGNlbnRlcjtcIj5BRlRFUjwvaDE+JyArIFxuXHRcdCAndGhlIGN1cnNvciwgc28gdGhhdCBvdGhlciBQbHVnaW5zIG9yIHByb2dyYW1zIGNhbiBjb3JyZWN0bHkgZGlzcGxheSBSVEwgdGV4dCBldmVuIGlmIHRoZSBGaXJzdCBDaGFyYWN0ZXIgaXMgaW4gTFRSIGxhbmd1YWdlcy4nO1xuXHR9XG5cblx0b25DbG9zZSgpIHtcblx0XHRjb25zdCB7Y29udGVudEVsfSA9IHRoaXM7XG5cdFx0Y29udGVudEVsLmVtcHR5KCk7XG5cdH1cbn1cblxuY2xhc3MgVGFic0ZvclNldHRpbmdzIGV4dGVuZHMgUGx1Z2luU2V0dGluZ1RhYiB7XG5cdHBsdWdpbjogSW5zZXJ0SW52aXNpYmxlUlRMO1xuXG5cdGNvbnN0cnVjdG9yKGFwcDogQXBwLCBwbHVnaW46IEluc2VydEludmlzaWJsZVJUTCkge1xuXHRcdHN1cGVyKGFwcCwgcGx1Z2luKTtcblx0XHR0aGlzLnBsdWdpbiA9IHBsdWdpbjtcblx0fVxuXG5cdGRpc3BsYXkoKTogdm9pZCB7XG5cdFx0Y29uc3Qge2NvbnRhaW5lckVsfSA9IHRoaXM7XG5cblx0XHRjb250YWluZXJFbC5lbXB0eSgpO1xuXG5cdFx0Y29udGFpbmVyRWwuY3JlYXRlRWwoJ2gyJywge3RleHQ6ICdTZXR0aW5ncyBmb3IgUGx1Z2luIEJ1dHRvbiBEaXNwbGF5Lid9KTtcblxuXHRcdG5ldyBTZXR0aW5nKGNvbnRhaW5lckVsKVxuXHRcdC5zZXROYW1lKCdTaG93L0hpbGRlIGZyb20gU3RhdHVzIEJhcicpXG5cdFx0LnNldERlc2MoJ3R1cm4gb24gdG8gc2hvdyBpbnNlcnQgYnV0dG9uLCBvciB0dXJuIG9mZiB0byBoaWRlLicpXG5cdFx0LmFkZFRvZ2dsZSgodG9nZ2xlKSA9PiB0b2dnbGUuc2V0VmFsdWUodGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1N0YXR1c0Jhcilcblx0XHRcdC5vbkNoYW5nZSgodmFsdWUpID0+IHtcblx0XHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1N0YXR1c0JhciA9ICF0aGlzLnBsdWdpbi5zZXR0aW5ncy5zaG93U3RhdHVzQmFyO1xuXHRcdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblx0XHRcdFx0dGhpcy5wbHVnaW4uY2hhbmdlU3RhdHVzQmFyKCk7XG5cdFx0XHR9KVxuXHRcdCk7XG5cblx0XHQvLyBhZGQgbmV3IHJpZ2h0IGNsaWNrIG1lbnVcblx0XHRuZXcgU2V0dGluZyhjb250YWluZXJFbClcblx0XHQuc2V0TmFtZSgnU2hvdy9IaWxkZSBmcm9tIFJpZ2h0IENsaWNrIE1lbnUnKVxuXHRcdC5zZXREZXNjKCd0dXJuIG9uIHRvIHNob3cgaW5zZXJ0IGJ1dHRvbiwgb3IgdHVybiBvZmYgdG8gaGlkZS4nKVxuXHRcdC5hZGRUb2dnbGUoKHRvZ2dsZSkgPT4gdG9nZ2xlLnNldFZhbHVlKHRoaXMucGx1Z2luLnNldHRpbmdzLnNob3dSaWdodENsaWNrKVxuXHRcdFx0Lm9uQ2hhbmdlKCh2YWx1ZSkgPT4ge1xuXHRcdFx0dGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1JpZ2h0Q2xpY2sgPSAhdGhpcy5wbHVnaW4uc2V0dGluZ3Muc2hvd1JpZ2h0Q2xpY2s7XG5cdFx0XHR0aGlzLnBsdWdpbi5zYXZlU2V0dGluZ3MoKTtcblx0XHR9KSk7XG5cdFx0XG5cdH1cbn1cbiJdLAogICJtYXBwaW5ncyI6ICI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzQkFBeUk7QUFNekksSUFBTSxtQkFBc0M7QUFBQSxFQUMzQyxlQUFlO0FBQUEsRUFDZixnQkFBZ0I7QUFDakI7QUFFQSxJQUFxQixxQkFBckIsY0FBZ0QsdUJBQU87QUFBQSxFQUV0RCxNQUFNLFNBQVM7QUFDZCxVQUFNLEtBQUssYUFBYTtBQUV4QixVQUFNLDZCQUFzQztBQUFBLE1BQzNDLElBQUk7QUFBQSxNQUNKLE1BQU07QUFBQSxNQUNOLGdCQUFlLENBQUMsUUFBZ0IsU0FBdUI7QUFDdEQsWUFBSSxnQkFBZ0IsU0FBUyx1QkFBdUI7QUFDcEQsc0JBQWMs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