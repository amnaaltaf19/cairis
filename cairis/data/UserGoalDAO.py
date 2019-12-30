#  Licensed to the Apache Software Foundation (ASF) under one
#  or more contributor license agreements.  See the NOTICE file
#  distributed with this work for additional information
#  regarding copyright ownership.  The ASF licenses this file
#  to you under the Apache License, Version 2.0 (the
#  "License"); you may not use this file except in compliance
#  with the License.  You may obtain a copy of the License at
#
#  http://www.apache.org/licenses/LICENSE-2.0
#
#  Unless required by applicable law or agreed to in writing,
#  software distributed under the License is distributed on an
#  "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
#  KIND, either express or implied.  See the License for the
#  specific language governing permissions and limitations
#  under the License.

from cairis.core.ARM import *
from cairis.core.ReferenceSynopsis import ReferenceSynopsis
from cairis.daemon.CairisHTTPError import ObjectNotFoundHTTPError, MalformedJSONHTTPError, ARMHTTPError, MissingParameterHTTPError, OverwriteNotAllowedHTTPError
import cairis.core.armid
from cairis.data.CairisDAO import CairisDAO
from cairis.tools.ModelDefinitions import ReferenceSynopsisModel
from cairis.tools.SessionValidator import check_required_keys, get_fonts
from cairis.tools.JsonConverter import json_serialize, json_deserialize
from cairis.misc.UserGoalModel import UserGoalModel
import re

__author__ = 'Shamal Faily'


class UserGoalDAO(CairisDAO):
  def __init__(self, session_id):
    CairisDAO.__init__(self, session_id)

  def get_user_goals(self,constraint_id = -1):
    try:
      if (constraint_id != -1):
        constraint_id = self.db_proxy.getDimensionId(constraint_id,'synopsis')
      rawObjts = self.db_proxy.getUserGoals(constraint_id)
      objts = []
      for objt in rawObjts:
        del objt.theId
        objts.append(objt)
      if (constraint_id != -1):
        return objts[0]
      else:
        return objts
    except DatabaseProxyException as ex:
      self.close()
      raise ARMHTTPError(ex)
    except ARMException as ex:
      self.close()
      raise ARMHTTPError(ex)

  def add_user_goal(self, ug):
    try:
      self.db_proxy.addUserGoal(ug)
    except ARMException as ex:
      self.close()
      raise ARMHTTPError(ex)


  def update_user_goal(self,ug,name):
    try:
      ugId = self.db_proxy.getDimensionId(name,'synopsis')
      ug.setId(ugId)
      self.db_proxy.updateUserGoal(ug)
    except ARMException as ex:
      self.close()
      raise ARMHTTPError(ex)

  def delete_user_goal(self, name):
    try:
      ugId = self.db_proxy.getDimensionId(name,'synopsis')
      self.db_proxy.deleteUserGoal(ugId)
    except ARMException as ex:
      self.close()
      raise ARMHTTPError(ex)

  def from_json(self, request, to_props=False):
    json = request.get_json(silent=True)
    if json is False or json is None:
      self.close()
      raise MalformedJSONHTTPError(data=request.get_data())

    json_dict = json['object']
    check_required_keys(json_dict, ReferenceSynopsisModel.required)
    json_dict['__python_obj__'] = ReferenceSynopsis.__module__+'.'+ ReferenceSynopsis.__name__
    ug = json_serialize(json_dict)
    ug = json_deserialize(ug)

    if isinstance(ug, ReferenceSynopsis):
      return ug
    else:
      self.close()
      raise MalformedJSONHTTPError()

  def get_user_goal_model(self, environment_name, filter_element):
    fontName, fontSize, apFontName = get_fonts(session_id=self.session_id)
    try:
      gcs = self.db_proxy.getGoalContributions(environment_name,filter_element)
      ugm = UserGoalModel(gcs,environment_name,self.db_proxy,font_name=fontName, font_size=fontSize)
      dot_code = ugm.graph()

      if not dot_code:
        raise ObjectNotFoundHTTPError('The user goal model')
      return dot_code
    except DatabaseProxyException as ex:
      self.close()
      raise ARMHTTPError(ex)
    except ARMException as ex:
      self.close()
      raise ARMHTTPError(ex)