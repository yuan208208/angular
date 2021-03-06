/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */

import {IncrementalBuild} from '../api';

export const NOOP_INCREMENTAL_BUILD: IncrementalBuild<any, any> = {
  priorWorkFor: () => null,
  priorTypeCheckingResultsFor: () => null,
};
