/*---------------------------------------------------------------------------------------------
* Copyright (c) Bentley Systems, Incorporated. All rights reserved.
* See LICENSE.md in the project root for license terms and full copyright notice.
*--------------------------------------------------------------------------------------------*/
import * as React from "react";
import { mount, shallow } from "enzyme";
import TestUtils from "../TestUtils";
import { SeparatorBackstageItem } from "../../ui-framework/backstage/Separator";

describe("Backstage", () => {

  before(async () => {
    await TestUtils.initializeUiFramework();
  });

  after(() => {
    TestUtils.terminateUiFramework();
  });

  describe("<SeparatorBackstageItem />", () => {
    it("SeparatorBackstageItem should render", () => {
      mount(<SeparatorBackstageItem />);
    });

    it("SeparatorBackstageItem renders correctly", () => {
      shallow(<SeparatorBackstageItem />).should.matchSnapshot();
    });
  });
});
