//神月
const morphoData = [
    {
      title: (
          <h2>神月</h2>
      ),
      key: '0-0',
      children: [
        {
          title:  <h4>开通服务权限</h4>,
          key: '0-0-0',
          children: [
            {
                title: '上报',
                key: '0-0-0-0',
                // disableCheckbox: true,
            },
            {
                title: '闪蝶查询',
                key: '0-0-0-1',
            },
            {
                title: '神月不良标签',
                key: '0-0-0-2',
            },
            {
                title: '雨点分',
                key: '0-0-0-3',
            },
            {
                title: '神月查询',
                key: '0-0-0-4',
                //神月查询指定输出
                children: [
                    {
                        title: '信贷标签',
                        key: '0-0-0-4-1',
                        // disableCheckbox: true,
                    },
                    {
                        title: '黑名单标签',
                        key: '0-0-0-4-2',
                    }
                ]
            },
          ],
        },

        {
          title: <h4>输出以下字段</h4>,
          key: '0-0-1',
          children: [
            {
                title: '金额',
                key: '0-0-1-0'
            },
            {
                title: '信贷标签', 
                key: '0-0-1-1'
            },
            {
                title: '黑名单标签',
                key: '0-0-1-2'
            },
          ],
        },

        {
            title: <h4>上报忽略字段</h4>,
            key: '0-0-2',
            children: [
                {
                    title: '贷前金额数据',
                    key: '0-0-2-0'
                },
                {
                    title: '贷后还款数据',
                    key: '0-0-2-1'
                },
                {
                    title: '设备ID',
                    key: '0-0-2-2'
                },
                {
                    title: '申请人姓名',
                    key: '0-0-2-3'
                },
                {
                    title: '申请人身份证号',
                    key: '0-0-2-4'
                },
                {
                    title: '申请人手机号',
                    key: '0-0-2-5'
                },
                {
                    title: '贷款类型',
                    key: '0-0-2-6'
                },
                {
                    title: 'IP地址',
                    key: '0-0-2-7'
                },
                {
                    title: '经纬度',
                    key: '0-0-2-8'
                },
            ],
        },
        
        {
            title: <h4>查询入参明密文</h4>,
            key: '0-0-3',
            children: [
                {
                    title: '姓名',
                    key: '0-0-3-0',
                    children: [
                        {
                            title:'name',
                            key: '0-0-3-0-0'
                        },
                        {
                            title:'nameSHA256',
                            key: '0-0-3-0-1'
                        },
                        {
                            title:'nameMD5',
                            key: '0-0-3-0-2'
                        },
                        {
                            title:'nameSM3',
                            key: '0-0-3-0-3'
                        }
                    ]
                },
                {
                    title: '身份证', 
                    key: '0-0-3-1',
                    open: true,
                    children: [
                        {
                            title:'pid',
                            key: '0-0-3-1-0'
                        },
                        {
                            title:'pidSHA256',
                            key: '0-0-3-1-1'
                        },
                        {
                            title:'pidMD5',
                            key: '0-0-3-1-2'
                        },
                        {
                            title:'pidSM3',
                            key: '0-0-3-1-3'
                        }
                    ]
                },
                {
                    title: '手机号',
                    key: '0-0-3-2',
                    children: [
                        {
                            title:'mobile',
                            key: '0-0-3-2-0'
                        },
                        {
                            title:'mobileSHA256',
                            key: '0-0-3-2-1'
                        },
                        {
                            title:'mobileMD5',
                            key: '0-0-3-2-2'
                        },
                        {
                            title:'mobileSM3',
                            key: '0-0-3-2-3'
                        }
                    ]
                },              
                {
                    title: '贷款类型',
                    key: '0-0-3-3'
                }
            ]
        }
      ]
    }
]

//宙斯盾
const zeusData = [
    {
      title: (
          <h2>宙斯盾</h2>
      ),
      key: '0-0',
      children: [
        {
          title:  '开通服务权限',
          key: '0-0-0',
        //   disabled: true,
          children: [
            {
                title: '验证服务',
                key: '0-0-0-0',
                // disableCheckbox: true,
            },
            {
                title: '分层服务',
                key: '0-0-0-1',
            },
            {
                title: '报告服务',
                key: '0-0-0-2',
            },
            {
                title: '验证服务V3.0',
                key: '0-0-0-3',
            },
            {
                title: '贷中监控服务',
                key: '0-0-0-4',
                //神月查询指定输出
                children: [
                    {
                        title: '信贷标签',
                        key: '0-0-0-4-1',
                        // disableCheckbox: true,
                    },
                    {
                        title: '黑名单标签',
                        key: '0-0-0-4-2',
                    }
                ]
            },
          ],
        },

        // {
        //   title: '输出以下字段',
        //   key: '0-0-1',
        //   children: [
        //     {
        //         title: '金额',
        //         key: '0-0-1-0'
        //     },
        //     {
        //         title: '信贷标签', 
        //         key: '0-0-1-1'
        //     },
        //     {
        //         title: '黑名单标签',
        //         key: '0-0-1-2'
        //     },
        //   ],
        // },

        // {
        //     title: '上报忽略字段',
        //     key: '0-0-2',
        //     children: [
        //         {
        //             title: '贷前金额数据',
        //             key: '0-0-2-0'
        //         },
        //         {
        //             title: '贷后还款数据',
        //             key: '0-0-2-1'
        //         },
        //         {
        //             title: '设备ID',
        //             key: '0-0-2-2'
        //         },
        //         {
        //             title: '申请人姓名',
        //             key: '0-0-2-3'
        //         },
        //         {
        //             title: '申请人身份证号',
        //             key: '0-0-2-4'
        //         },
        //         {
        //             title: '申请人手机号',
        //             key: '0-0-2-5'
        //         },
        //         {
        //             title: '贷款类型',
        //             key: '0-0-2-6'
        //         },
        //         {
        //             title: 'IP地址',
        //             key: '0-0-2-7'
        //         },
        //         {
        //             title: '经纬度',
        //             key: '0-0-2-8'
        //         },
        //     ],
        // },
        
        {
            title: '查询入参明密文',
            key: '0-0-3',
            children: [
                {
                    title: '姓名',
                    key: '0-0-3-0',
                    children: [
                        {
                            title:'name',
                            key: '0-0-3-0-0'
                        },
                        {
                            title:'nameSHA256',
                            key: '0-0-3-0-1'
                        },
                        {
                            title:'nameMD5',
                            key: '0-0-3-0-2'
                        },
                        {
                            title:'nameSM3',
                            key: '0-0-3-0-3'
                        }
                    ]
                },
                {
                    title: '身份证', 
                    key: '0-0-3-1',
                    children: [
                        {
                            title:'pid',
                            key: '0-0-3-1-0'
                        },
                        {
                            title:'pidSHA256',
                            key: '0-0-3-1-1'
                        },
                        {
                            title:'pidMD5',
                            key: '0-0-3-1-2'
                        },
                        {
                            title:'pidSM3',
                            key: '0-0-3-1-3'
                        }
                    ]
                },
                {
                    title: '手机号',
                    key: '0-0-3-2',
                    children: [
                        {
                            title:'mobile',
                            key: '0-0-3-2-0'
                        },
                        {
                            title:'mobileSHA256',
                            key: '0-0-3-2-1'
                        },
                        {
                            title:'mobileMD5',
                            key: '0-0-3-2-2'
                        },
                        {
                            title:'mobileSM3',
                            key: '0-0-3-2-3'
                        }
                    ]
                },              
                {
                    title: '贷款类型',
                    key: '0-0-3-3'
                }
            ]
        }
      ]
    }
]

//黑名单
const blacklistData = [
    {
      title: (
          <h2>黑名单</h2>
      ),
      key: '0-0',
      children: [
        {
          title:  '开通服务权限',
          key: '0-0-0',
        //   disabled: true,
          children: [
            {
                title: '黑名单V3.0高阶版',
                key: '0-0-0-0',
                // disableCheckbox: true,
            },
            {
                title: '黑名单V3.0基础版',
                key: '0-0-0-1',
            },
            {
                title: '黑名单V2.0',
                key: '0-0-0-2',
            }
          ],
        },

        // {
        //   title: '输出以下字段',
        //   key: '0-0-1',
        //   children: [
        //     {
        //         title: '金额',
        //         key: '0-0-1-0'
        //     },
        //     {
        //         title: '信贷标签', 
        //         key: '0-0-1-1'
        //     },
        //     {
        //         title: '黑名单标签',
        //         key: '0-0-1-2'
        //     },
        //   ],
        // },

        // {
        //     title: '上报忽略字段',
        //     key: '0-0-2',
        //     children: [
        //         {
        //             title: '贷前金额数据',
        //             key: '0-0-2-0'
        //         },
        //         {
        //             title: '贷后还款数据',
        //             key: '0-0-2-1'
        //         },
        //         {
        //             title: '设备ID',
        //             key: '0-0-2-2'
        //         },
        //         {
        //             title: '申请人姓名',
        //             key: '0-0-2-3'
        //         },
        //         {
        //             title: '申请人身份证号',
        //             key: '0-0-2-4'
        //         },
        //         {
        //             title: '申请人手机号',
        //             key: '0-0-2-5'
        //         },
        //         {
        //             title: '贷款类型',
        //             key: '0-0-2-6'
        //         },
        //         {
        //             title: 'IP地址',
        //             key: '0-0-2-7'
        //         },
        //         {
        //             title: '经纬度',
        //             key: '0-0-2-8'
        //         },
        //     ],
        // },
        
        {
            title: '查询入参明密文',
            key: '0-0-3',
            children: [
                {
                    title: '姓名',
                    key: '0-0-3-0',
                    children: [
                        {
                            title:'name',
                            key: '0-0-3-0-0'
                        },
                        {
                            title:'nameSHA256',
                            key: '0-0-3-0-1'
                        },
                        {
                            title:'nameMD5',
                            key: '0-0-3-0-2'
                        },
                        {
                            title:'nameSM3',
                            key: '0-0-3-0-3'
                        }
                    ]
                },
                {
                    title: '身份证', 
                    key: '0-0-3-1',
                    children: [
                        {
                            title:'pid',
                            key: '0-0-3-1-0'
                        },
                        {
                            title:'pidSHA256',
                            key: '0-0-3-1-1'
                        },
                        {
                            title:'pidMD5',
                            key: '0-0-3-1-2'
                        },
                        {
                            title:'pidSM3',
                            key: '0-0-3-1-3'
                        }
                    ]
                },
                {
                    title: '手机号',
                    key: '0-0-3-2',
                    children: [
                        {
                            title:'mobile',
                            key: '0-0-3-2-0'
                        },
                        {
                            title:'mobileSHA256',
                            key: '0-0-3-2-1'
                        },
                        {
                            title:'mobileMD5',
                            key: '0-0-3-2-2'
                        },
                        {
                            title:'mobileSM3',
                            key: '0-0-3-2-3'
                        }
                    ]
                },              
                {
                    title: '贷款类型',
                    key: '0-0-3-3'
                }
            ]
        }
      ]
    }
]

//流量监控
const vcData = [
    {
      title: (
          <h2>流量监控</h2>
      ),
      key: '0-0',
      children: [
        {
          title:  '开通服务权限',
          key: '0-0-0',
        //   disabled: true,
          children: [
            {
                title: '流量监控V3.1',
                key: '0-0-0-0',
                // disableCheckbox: true,
                children: [
                    {
                        title: '只查中智诚',
                        key: '0-0-0-0-1',
                    },
                    {
                        title: '只查新颜',
                        key: '0-0-0-0-2',
                    },
                    {
                        title: '先查中智诚后查新颜',
                        key: '0-0-0-0-3',
                    }
                ]
            },
            {
                title: '流量监控V2.2',
                key: '0-0-0-1',
                children: [
                    {
                        title: '只查中智诚',
                        key: '0-0-0-1-1',
                    },
                    {
                        title: '只查新颜',
                        key: '0-0-0-1-2',
                    },
                    {
                        title: '先查中智诚后查新颜',
                        key: '0-0-0-1-3',
                    }
                ]
            }
          ]
        },
        {
            title: '查询入参明密文',
            key: '0-0-3',
            children: [
                {
                    title: '姓名',
                    key: '0-0-3-0',
                    children: [
                        {
                            title:'name',
                            key: '0-0-3-0-0'
                        },
                        {
                            title:'nameSHA256',
                            key: '0-0-3-0-1'
                        },
                        {
                            title:'nameMD5',
                            key: '0-0-3-0-2'
                        },
                        {
                            title:'nameSM3',
                            key: '0-0-3-0-3'
                        }
                    ]
                },
                {
                    title: '身份证', 
                    key: '0-0-3-1',
                    children: [
                        {
                            title:'pid',
                            key: '0-0-3-1-0'
                        },
                        {
                            title:'pidSHA256',
                            key: '0-0-3-1-1'
                        },
                        {
                            title:'pidMD5',
                            key: '0-0-3-1-2'
                        },
                        {
                            title:'pidSM3',
                            key: '0-0-3-1-3'
                        }
                    ]
                },
                {
                    title: '手机号',
                    key: '0-0-3-2',
                    children: [
                        {
                            title:'mobile',
                            key: '0-0-3-2-0'
                        },
                        {
                            title:'mobileSHA256',
                            key: '0-0-3-2-1'
                        },
                        {
                            title:'mobileMD5',
                            key: '0-0-3-2-2'
                        },
                        {
                            title:'mobileSM3',
                            key: '0-0-3-2-3'
                        }
                    ]
                },              
                {
                    title: '贷款类型',
                    key: '0-0-3-3'
                }
            ]
        }
      ]
    }
]

//反欺诈
const antifraud = [
    {
      title: (
          <h2>反欺诈</h2>
      ),
      key: '0-0',
      children: [
        {
          title:  '开通服务权限',
          key: '0-0-0',
        //   disabled: true,
          children: [
            {
                title: '黑名单V3.0高阶版',
                key: '0-0-0-0',
                // disableCheckbox: true,
            }
          ]
        },

        {
            title: '查询入参明密文',
            key: '0-0-3',
            children: [
                {
                    title: '姓名',
                    key: '0-0-3-0',
                    children: [
                        {
                            title:'name',
                            key: '0-0-3-0-0'
                        },
                        {
                            title:'nameSHA256',
                            key: '0-0-3-0-1'
                        },
                        {
                            title:'nameMD5',
                            key: '0-0-3-0-2'
                        },
                        {
                            title:'nameSM3',
                            key: '0-0-3-0-3'
                        }
                    ]
                },
                {
                    title: '身份证', 
                    key: '0-0-3-1',
                    children: [
                        {
                            title:'pid',
                            key: '0-0-3-1-0'
                        },
                        {
                            title:'pidSHA256',
                            key: '0-0-3-1-1'
                        },
                        {
                            title:'pidMD5',
                            key: '0-0-3-1-2'
                        },
                        {
                            title:'pidSM3',
                            key: '0-0-3-1-3'
                        }
                    ]
                },
                {
                    title: '手机号',
                    key: '0-0-3-2',
                    children: [
                        {
                            title:'mobile',
                            key: '0-0-3-2-0'
                        },
                        {
                            title:'mobileSHA256',
                            key: '0-0-3-2-1'
                        },
                        {
                            title:'mobileMD5',
                            key: '0-0-3-2-2'
                        },
                        {
                            title:'mobileSM3',
                            key: '0-0-3-2-3'
                        }
                    ]
                },              
                {
                    title: '贷款类型',
                    key: '0-0-3-3'
                }
            ]
        }
      ]
    }
]

//信用评分
const rainBowData = [
    {
      title: (
          <h2>信用评分</h2>
      ),
      key: '0-0',
      children: [
        {
          title:  '开通服务权限',
          key: '0-0-0',
          children: [
            {
                title: '雨点分V2.0 (zzcS1020)',
                key: '0-0-0-0',
            },
            {
                title: '彩虹分-线上现金分期 (zzcS3010)',
                key: '0-0-0-1',
            },
            {
                title: '彩虹分-组合版V1.0 (zzcS4010',
                key: '0-0-0-2',
            },
            {
                title: '彩虹分-组合版V2.0 (zzcS4020)',
                key: '0-0-0-3',
            },
            {
                title: '彩虹分V3.0 (zzcS5010)',
                key: '0-0-0-4',
            },
            {
                title: '多头行为分 (zzcS5020)',
                key: '0-0-0-5',
            },
            {
                title: '反欺诈分 (zzcS5030)',
                key: '0-0-0-6',
            },
            {
                title: '互联网行为分 (zzcS5040)',
                key: '0-0-0-7',
            },
            {
                title: '电商行为分 (zzcS5050)',
                key: '0-0-0-8',
            },
            {
                title: '生活行为分 (zzcS5060)',
                key: '0-0-0-9',
            }
          ]
        },
        {
            title: '查询入参明密文',
            key: '0-0-3',
            children: [
                {
                    title: '姓名',
                    key: '0-0-3-0',
                    children: [
                        {
                            title:'name',
                            key: '0-0-3-0-0'
                        },
                        {
                            title:'nameSHA256',
                            key: '0-0-3-0-1'
                        },
                        {
                            title:'nameMD5',
                            key: '0-0-3-0-2'
                        },
                        {
                            title:'nameSM3',
                            key: '0-0-3-0-3'
                        }
                    ]
                },
                {
                    title: '身份证', 
                    key: '0-0-3-1',
                    children: [
                        {
                            title:'pid',
                            key: '0-0-3-1-0'
                        },
                        {
                            title:'pidSHA256',
                            key: '0-0-3-1-1'
                        },
                        {
                            title:'pidMD5',
                            key: '0-0-3-1-2'
                        },
                        {
                            title:'pidSM3',
                            key: '0-0-3-1-3'
                        }
                    ]
                },
                {
                    title: '手机号',
                    key: '0-0-3-2',
                    children: [
                        {
                            title:'mobile',
                            key: '0-0-3-2-0'
                        },
                        {
                            title:'mobileSHA256',
                            key: '0-0-3-2-1'
                        },
                        {
                            title:'mobileMD5',
                            key: '0-0-3-2-2'
                        },
                        {
                            title:'mobileSM3',
                            key: '0-0-3-2-3'
                        }
                    ]
                },              
                {
                    title: '贷款类型',
                    key: '0-0-3-3'
                }
            ]
        }
      ]
    }
]

export {
    morphoData,
    zeusData,
    blacklistData,
    vcData,
    antifraud,
    rainBowData
}